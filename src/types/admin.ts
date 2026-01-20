export interface OrderStats {
    totalRevenue: number
    totalOrders: number
    ordersByStatus: OrderStatusStats
}

export interface OrderStatusStats {
    Cancelled: number
    Processing: number
    Delivered: number
    Pending: number
}