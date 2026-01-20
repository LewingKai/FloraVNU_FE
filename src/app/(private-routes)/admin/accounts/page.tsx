"use client";
import { useEffect, useState } from "react";
import {
  Avatar,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  TextField,
} from "@mui/material";
import { Button } from "@/components/ui/Button";

import adminApi from "@/services/axios/actions/admin.action";
import { Account } from "@/types/account";

type Meta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

const AdminAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [meta, setMeta] = useState<Meta>({ page: 1, limit: 10, total: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const fetchAccounts = async (page = 1) => {
    setLoading(true);
    try {
      const res = await adminApi.getAccounts({ page, limit: meta.limit });
      setAccounts(res.data || []);
      setMeta(res.meta || { page, limit: meta.limit, total: 0, totalPages: 1 });
    } catch (err) {
      setAccounts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      fetchAccounts(1);
      return;
    }
    setLoading(true);
    try {
      const res = await adminApi.findAccountByName(searchValue.trim());
      setAccounts(res.data ? [res.data] : []);
      setMeta({ page: 1, limit: 10, total: 1, totalPages: 1 });
    } catch (err) {
      setAccounts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts(meta.page);
  }, [meta.page]);

  const handlePageChange = (_: any, value: number) => {
    setMeta((prev) => ({ ...prev, page: value }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-secondary">Danh sách tài khoản</h2>
      <div className="flex gap-2 mb-4">
        <TextField
          label="Tìm kiếm theo tên tài khoản"
          variant="outlined"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <Button variant="default" onClick={handleSearch} className="rounded-sm">
          Tìm kiếm
        </Button>
        <Button
          variant="default"
          onClick={() => {
            setSearchValue("");
            fetchAccounts(1);
          }}
          className="rounded-sm"
        >
          Xóa lọc
        </Button>
      </div>
      {loading ? (
        <div className="flex justify-center py-10">
          <CircularProgress />
        </div>
      ) : (
        <>
          <TableContainer
            component={Paper}
            className="shadow-lg rounded-2xl border border-gray-100"
          >
            <Table>
              <TableHead>
                <TableRow className="bg-gradient-to-r from-secondary to-pink-400">
                  <TableCell className="!text-white font-bold">Avatar</TableCell>
                  <TableCell className="!text-white font-bold">Tên tài khoản</TableCell>
                  <TableCell className="!text-white font-bold">Họ và tên</TableCell>
                  <TableCell className="!text-white font-bold">Email</TableCell>
                  <TableCell className="!text-white font-bold">Giới tính</TableCell>
                  <TableCell className="!text-white font-bold">Ngày sinh</TableCell>
                  <TableCell className="!text-white font-bold">SĐT</TableCell>
                  <TableCell className="!text-white font-bold">Vai trò</TableCell>
                  <TableCell className="!text-white font-bold">Ngày tạo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accounts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} align="center">
                      Không có tài khoản nào.
                    </TableCell>
                  </TableRow>
                ) : (
                  accounts.map((acc) => (
                    <TableRow
                      key={acc._id}
                      className="hover:bg-pink-50 transition-colors"
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>
                        <Avatar
                          src={acc.avatar?.url}
                          alt={acc.fullName}
                          sx={{ width: 48, height: 48, border: "2px solid #f48fb1" }}
                        />
                      </TableCell>
                      <TableCell className="font-semibold">{acc.username}</TableCell>
                      <TableCell>{acc.fullName}</TableCell>
                      <TableCell>
                        <span className="text-blue-700">{acc.email}</span>
                      </TableCell>
                      <TableCell>
                        <span className="capitalize">{acc.gender}</span>
                      </TableCell>
                      <TableCell>
                        {acc.birthday
                          ? new Date(acc.birthday).toLocaleDateString("vi-VN")
                          : ""}
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">{acc.phone}</span>
                      </TableCell>
                      <TableCell>
                        <span
                          className={
                            acc.role === "admin"
                              ? "bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-xs font-bold"
                              : "bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-bold"
                          }
                        >
                          {acc.role}
                        </span>
                      </TableCell>
                      <TableCell>
                        {acc.createdAt
                          ? new Date(acc.createdAt).toLocaleString("vi-VN")
                          : ""}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="flex justify-center mt-6">
            <Pagination
              count={meta.totalPages}
              page={meta.page}
              onChange={handlePageChange}
              shape="rounded"
              size="large"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminAccounts;
