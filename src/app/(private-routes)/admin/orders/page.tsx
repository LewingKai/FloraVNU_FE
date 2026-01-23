"use client";
import { useEffect, useState } from "react";
import adminApi from "@/services/axios/actions/admin.action";
import orderApi from "@/services/axios/actions/order.action";
import { OrderStats } from "@/types/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  TextField,
  MenuItem,
  Pagination,
  InputLabel,
  FormControl,
  Select,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/Button";

const statusOptions = [
  { label: "Tất cả", value: "" },
  { label: "Chờ xử lý", value: "Pending" },
  { label: "Đang giao", value: "Processing" },
  { label: "Đã giao", value: "Delivered" },
  { label: "Đã hủy", value: "Cancelled" },
];

const sortByOptions = [
  { label: "Ngày tạo", value: "createAt" },
  { label: "Tổng tiền", value: "totalPrice" },
];

const sortOrderOptions = [
  { label: "Tăng dần", value: "asc" },
  { label: "Giảm dần", value: "desc" },
];

const AdminOrders = () => {
  const [stats, setStats] = useState<OrderStats | null>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [meta, setMeta] = useState({ page: 1, limit: 10, total: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);

  const [filterValues, setFilterValues] = useState({
    page: 1,
    limit: 10,
    search: "",
    status: "",
    startDate: "",
    endDate: "",
    sortBy: "createAt",
    sortOrder: "desc",
  });
  const [params, setParams] = useState({ ...filterValues });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await adminApi.getOrderStats();
        setStats(res.data);
      } catch {}
    };
    fetchStats();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const paramsToSend = {
          ...params,
          startDate: params.startDate ? new Date(params.startDate).toISOString() : undefined,
          endDate: params.endDate ? new Date(params.endDate).toISOString() : undefined,
        };
        const res = await adminApi.searchOrder(paramsToSend);
        setOrders(res.data || []);
        setMeta(res.meta || { page: 1, limit: 10, total: 0, totalPages: 1 });
      } catch {
        setOrders([]);
        setMeta({ page: 1, limit: 10, total: 0, totalPages: 1 });
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [params]);

  const handlePageChange = (_: any, value: number) => {
    setParams((prev) => ({ ...prev, page: value }));
    setFilterValues((prev) => ({ ...prev, page: value }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilter = () => {
    setParams({ ...filterValues, page: 1 });
  };

  const handleReset = () => {
    const reset = {
      page: 1,
      limit: 10,
      search: "",
      status: "",
      startDate: "",
      endDate: "",
      sortBy: "createAt",
      sortOrder: "desc",
    };
    setFilterValues(reset);
    setParams(reset);
  };

  const handleUpdateStatus = async (orderId: string, newStatus: string) => {
    try {
      await orderApi.updateOrderStatus(newStatus, orderId);
      setParams({ ...params });
    } catch {
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (!window.confirm("Bạn có chắc muốn xóa đơn này?")) return;
    try {
      await orderApi.deleteOrder(orderId);
      setParams({ ...params });
    } catch {
    }
  };

  const getNextStatusOptions = (currentStatus: string) => {
    switch (currentStatus) {
      case "Pending":
        return [
          { value: "Processing", label: "Đang giao" },
          { value: "Cancelled", label: "Đã hủy" },
        ];
      case "Processing":
        return [{ value: "Delivered", label: "Đã giao" }];
      default:
        return [];
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-secondary">Thống kê đơn hàng</h2>
      {stats ? (
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="p-4 bg-white rounded-xl shadow min-w-[160px] flex-1">
            <div className="font-bold text-lg text-pink-600">Tổng đơn</div>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow min-w-[160px] flex-1">
            <div className="font-bold text-lg text-green-600">Doanh thu</div>
            <div className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()}₫</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow min-w-[220px] flex-1">
            <div className="font-bold text-lg">Trạng thái</div>
            <div className="flex flex-col gap-1 mt-2">
              <span>Chờ xử lý: <b className="text-yellow-600">{stats.ordersByStatus.Pending}</b></span>
              <span>Đang giao: <b className="text-blue-600">{stats.ordersByStatus.Processing}</b></span>
              <span>Đã giao: <b className="text-green-600">{stats.ordersByStatus.Delivered}</b></span>
              <span>Đã hủy: <b className="text-gray-500">{stats.ordersByStatus.Cancelled}</b></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center py-10"><CircularProgress /></div>
      )}

      <Box className="bg-white rounded-xl shadow p-4 mb-6" sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(4,1fr)" }, gap: 2 }}>
        <TextField
          label="Tìm kiếm tên người nhận..."
          size="small"
          value={filterValues.search}
          onChange={e => setFilterValues(p => ({ ...p, search: e.target.value }))}
          fullWidth
        />
        <FormControl size="small" fullWidth>
          <InputLabel>Trạng thái</InputLabel>
          <Select
            label="Trạng thái"
            value={filterValues.status}
            onChange={e => setFilterValues(p => ({ ...p, status: e.target.value }))}
          >
            {statusOptions.map(opt => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Từ ngày"
          type="date"
          size="small"
          value={filterValues.startDate}
          onChange={e => setFilterValues(p => ({ ...p, startDate: e.target.value }))}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <TextField
          label="Đến ngày"
          type="date"
          size="small"
          value={filterValues.endDate}
          onChange={e => setFilterValues(p => ({ ...p, endDate: e.target.value }))}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <FormControl size="small" fullWidth>
          <InputLabel>Sắp xếp theo</InputLabel>
          <Select
            label="Sắp xếp theo"
            value={filterValues.sortBy}
            onChange={e => setFilterValues(p => ({ ...p, sortBy: e.target.value }))}
          >
            {sortByOptions.map(opt => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size="small" fullWidth>
          <InputLabel>Thứ tự</InputLabel>
          <Select
            label="Thứ tự"
            value={filterValues.sortOrder}
            onChange={e => setFilterValues(p => ({ ...p, sortOrder: e.target.value }))}
          >
            {sortOrderOptions.map(opt => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button variant="default" color="primary" onClick={handleFilter} className="flex-1 rounded-sm">
            Lọc
          </Button>
          <Button variant="default" color="secondary" onClick={handleReset} className="flex-1 rounded-sm">
            Xóa lọc
          </Button>
        </Box>
      </Box>

      <TableContainer component={Paper} className="shadow-lg rounded-2xl border border-gray-100">
        <Table>
          <TableHead>
            <TableRow className="bg-gradient-to-r from-secondary to-pink-400">
              <TableCell className="!text-white font-bold">Mã đơn</TableCell>
              <TableCell className="!text-white font-bold">Khách hàng</TableCell>
              <TableCell className="!text-white font-bold">Người nhận</TableCell>
              <TableCell className="!text-white font-bold">Trạng thái</TableCell>
              <TableCell className="!text-white font-bold">Phương thức</TableCell>
              <TableCell className="!text-white font-bold">Thanh toán</TableCell>
              <TableCell className="!text-white font-bold">Ngày tạo</TableCell>
              <TableCell className="!text-white font-bold">Tổng tiền</TableCell>
              <TableCell className="!text-white font-bold">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  <CircularProgress size={24} />
                </TableCell>
              </TableRow>
            ) : orders.length > 0 ? (
              orders.map(order => (
                <TableRow key={order._id} className="hover:bg-pink-50 transition-colors">
                  <TableCell>{order._id}</TableCell>
                  <TableCell>{order.senderName}</TableCell>
                  <TableCell>{order.recipientName}</TableCell>
                  <TableCell>
                    <span
                      className={
                        order.orderStatus === "Pending"
                          ? "text-yellow-600 font-bold"
                          : order.orderStatus === "Processing"
                          ? "text-blue-600 font-bold"
                          : order.orderStatus === "Delivered"
                          ? "text-green-600 font-bold"
                          : "text-gray-500 font-bold"
                      }
                    >
                      {
                        {
                          Pending: "Chờ xử lý",
                          Processing: "Đang giao",
                          Delivered: "Đã giao",
                          Cancelled: "Đã hủy",
                        }[order.orderStatus as "Pending" | "Processing" | "Delivered" | "Cancelled"]
                      }
                    </span>
                  </TableCell>
                  <TableCell>{order.paymentMethod === "Cash" ? "Tiền mặt" : "Chuyển khoản"}</TableCell>
                  <TableCell>
                    <span className={order.paymentStatus ? "text-green-600 font-bold" : "text-red-500 font-bold"}>
                      {order.paymentStatus ? "Đã thanh toán" : "Chưa thanh toán"}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(order.createdAt).toLocaleString("vi-VN")}</TableCell>
                  <TableCell className="font-bold text-pink-600">{order.totalPrice?.toLocaleString()}₫</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, minHeight: 56 }}>
                      {order.orderStatus === "Cancelled" ? (
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDeleteOrder(order._id)}
                          title="Xóa đơn"
                          className="flex items-center justify-center border-0"
                          style={{ minWidth: 0, padding: 8 }}
                        >
                          <FontAwesomeIcon icon={faTrash} className="text-red-500 hover:text-red-400" />
                        </Button>
                      ) : (
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                          <Select
                            value={order.orderStatus}
                            onChange={e => handleUpdateStatus(order._id, e.target.value)}
                            disabled={order.orderStatus === "Delivered"}
                            sx={{
                              background: "#fff",
                              ".MuiSelect-select": { display: "flex", alignItems: "center" },
                            }}
                          >
                            <MenuItem value={order.orderStatus}>
                              {
                                {
                                  Pending: "Chờ xử lý",
                                  Processing: "Đang giao",
                                  Delivered: "Đã giao",
                                  Cancelled: "Đã hủy",
                                }[order.orderStatus as "Pending" | "Processing" | "Delivered" | "Cancelled"]
                              }
                            </MenuItem>
                            {getNextStatusOptions(order.orderStatus).map(opt => (
                              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  Không có đơn hàng nào.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-center mt-6">
        <Pagination
          count={meta.totalPages}
          page={params.page}
          onChange={handlePageChange}
          shape="rounded"
          size="large"
        />
      </div>
    </div>
  );
};

export default AdminOrders;
