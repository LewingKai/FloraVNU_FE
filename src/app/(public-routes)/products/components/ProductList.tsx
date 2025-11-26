"use client";
import FlowerItem from "@/components/flower_item";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CircularProgress,
  FormControl,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import ListFilter from "./list_filter";
import { enumSortType, Flower, SearchParamsType } from "@/types/home";
import productApi from "@/services/axios/actions/products.action";
import SearchBar from "@/components/ui/SearchBar";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductTextVN } from "@/helpers/text_vn";
import { keepPreviousData, QueryClient, useQuery } from "@tanstack/react-query";
import helpersFunction from "@/helpers/helpers";

const filterType = {
  event: [
    { label: "Hoa chúc mừng", value: "congratulation" },
    { label: "Hoa khai trương", value: "Hoa khai trương" },
    { label: "Hoa tốt nghiệp", value: "graduation" },
  ],
  flowerType: [
    { label: "Hoa hồng", value: "rose" },
    { label: "Hoa cẩm chướng", value: "carnation" },
    { label: "Hoa tulip", value: "tulip" },
    { label: "Hoa ly", value: "lily" },
    { label: "Hoa cẩm tú cầu", value: "hydrangea" },
    { label: "Hoa đồng tiền", value: "gerbera" },
  ],
  shapeType: [
    { label: "Bó hoa", value: "bouquet" },
    { label: "Hộp hoa", value: "flower-box" },
    { label: "Giỏ hoa", value: "basket" },
  ],
};

const sortTypeList = [
  {
    label: "Giá tăng dần",
    value: "asc",
  },
  {
    label: "Giá giảm dần",
    value: "desc",
  },
];

type Props = {
  searchParams: SearchParamsType;
  filterListCate: any;
};

export type FilterListType = {
  limited: string;
  forms: string[];
  occasions: string[];
  types: string[];
  priceMax: number;
  stockQuantity: string;
  priceSort: string;
  searchType: string;
  keyword: string;
  page: number;
  priceMin: number;
};

const ProductsList = ({ searchParams, filterListCate }: Props) => {
  const fontSizeP =
    "text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px]";
  const fontSizeH1 =
    "text-[30px] md:text-[50px] sm:text-[40px]  lg:text-[80px]";
  const [sortType, setSortType] = useState(enumSortType.priceIncreases);
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [currencyValue, setcurrencyValue] = useState("name");
  const [filterList, setFilterList] = useState<FilterListType>({
    limited: "20",
    forms: [],
    occasions: [],
    types: [],
    priceMax: 50000000,
    stockQuantity: enumSortType.priceIncreases,
    priceSort: sortType,
    searchType: "name",
    keyword: "",
    page: 1,
    priceMin: 0,
  });
  // const [flowers, setFlowers] = useState<Flower[]>(flowerList);
  const [hasInitial, setHasInitial] = useState(true);
  const isFirstRender = useRef(true);
  const router = useRouter();
  const searchParam = useSearchParams();
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = () => {
    setFilterList((prev) => ({
      ...prev,
      keyword: searchValue,
      searchType: currencyValue,
      page: 1,
    }));
  };

  const parsedParams = useMemo(() => {
    const params = new URLSearchParams(searchParam.toString());
    const sortParam = params.get("sort") ?? "";
    let priceSort = "asc";
    let stockQuantity = "desc";

    if (sortParam) {
      const priceMatch = sortParam.match(/price:(\w+)/);
      const stockMatch = sortParam.match(/stockQuantity:(\w+)/);
      if (priceMatch?.[1]) priceSort = priceMatch[1];
      if (stockMatch?.[1]) stockQuantity = stockMatch[1];
    }
    return {
      keyword: params.get("keyword") ?? "",
      searchType: params.get("searchType") ?? "name",
      sortParam: params.get("sort") ?? "",
      limited: params.get("limit") ?? "20",
      forms: (params.get("forms")?.split(",") ?? []) as string[],
      occasions: (params.get("occasions")?.split(",") ?? []) as string[],
      types: (params.get("types")?.split(",") ?? []) as string[],
      priceMax: params.get("priceMax")
        ? Number(params.get("priceMax"))
        : 50000000,
      priceMin: params.get("priceMin") ? Number(params.get("priceMin")) : 0,
      stockQuantity,
      priceSort,
      page: params.get("page") ? Number(params.get("page")) : 1,
    };
  }, [searchParam]);

  useEffect(() => {
    setSearchValue(parsedParams.keyword);
    setcurrencyValue(parsedParams.searchType);
    setSortType(parsedParams.priceSort);
    setFilterList({
      limited: parsedParams.limited,
      forms: parsedParams.forms,
      occasions: parsedParams.occasions,
      types: parsedParams.types,
      priceMax: parsedParams.priceMax,
      priceMin: parsedParams.priceMin,
      stockQuantity: parsedParams.stockQuantity,
      priceSort: parsedParams.priceSort,
      searchType: parsedParams.searchType,
      keyword: parsedParams.keyword,
      page: parsedParams.page,
    });
  }, [parsedParams]);

  const fetchProducts = async (filters: FilterListType) => {
    setIsLoading(true);
    const paramsWeb = new URLSearchParams();

    if (filters.limited) paramsWeb.set("limit", filters.limited);
    if (filters.forms?.length) paramsWeb.set("forms", filters.forms.join(","));
    if (filters.occasions?.length)
      paramsWeb.set("occasions", filters.occasions.join(","));
    if (filters.types?.length) paramsWeb.set("types", filters.types.join(","));
    if (filters.priceMax)
      paramsWeb.set("priceMax", filters.priceMax.toString());
    if (filters.priceMin)
      paramsWeb.set("priceMin", filters.priceMin.toString());
    if (filters.searchType) paramsWeb.set("searchType", filters.searchType);
    if (filters.keyword) paramsWeb.set("keyword", filters.keyword);
    paramsWeb.set("page", filters.page.toString());
    paramsWeb.set(
      "sort",
      `price:${filters.priceSort},stockQuantity:${filters.stockQuantity}`
    );
    setCount((prev) => prev + 1);
    let res = [];
    try {
      res = await productApi.search(Object.fromEntries(paramsWeb));
    } catch (error) {}
    setIsLoading(false);
    return res;
  };

  const { data, isPending, isError, isSuccess, isFetching } = useQuery({
    queryKey: helpersFunction.getProductQueryKey(searchParams),
    queryFn: () => fetchProducts(filterList),
    // placeholderData: keepPreviousData,
    enabled: !hasInitial,
    // initialData: hasInitial
    //   ? { data: flowerList, total: flowerList.length }
    //   : undefined,
    staleTime: 1000 * 60 * 3, // cache 3 phút
  });

  useEffect(() => {
    // if (!isSuccess) return;
    if (hasInitial) setHasInitial(false);
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fetchData = async () => {
      const paramsWeb = new URLSearchParams();

      // Gắn các param nếu có giá trị
      if (filterList.limited) paramsWeb.set("limit", filterList.limited);
      if (filterList.forms?.length)
        paramsWeb.set("forms", filterList.forms.join(","));
      if (filterList.occasions?.length)
        paramsWeb.set("occasions", filterList.occasions.join(","));
      if (filterList.types?.length)
        paramsWeb.set("types", filterList.types.join(","));
      if (filterList.priceMax)
        paramsWeb.set("priceMax", filterList.priceMax.toString());
      if (filterList.priceMin)
        paramsWeb.set("priceMin", filterList.priceMin.toString());
      if (filterList.searchType)
        paramsWeb.set("searchType", filterList.searchType);
      if (filterList.keyword) paramsWeb.set("keyword", filterList.keyword);
      paramsWeb.set("page", filterList.page.toString());
      paramsWeb.set(
        "sort",
        `price:${filterList.priceSort},stockQuantity:${filterList.stockQuantity}`
      );
      const newUrl = `?${paramsWeb.toString()}`;
      const currentUrl = window.location.search;

      if (newUrl !== currentUrl) {
        router.replace(newUrl, { scroll: false });
      }
    };

    fetchData();
  }, [JSON.stringify(filterList)]);

  const handleFilterChange = (key: string, values: string[] | number[]) => {
    setFilterList((prev) => ({
      ...prev,
      [key]: values,
    }));
  };
  const [isClientLoading, setIsClientLoading] = useState(false);
  useEffect(() => {
    setIsClientLoading(true);

    const timer = setTimeout(() => {
      setIsClientLoading(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, [JSON.stringify(filterList)]);
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/images/menu/image1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full lg:h-[650px] md:h-[450px] h-[200px] relative items-center justify-center flex"
      >
        <div className="sm:max-w-[70%] max-w-[80%]">
          <h1 className={`${fontSizeH1} font-bold text-white text-center mb-5`}>
            {ProductTextVN.ourProducts}
          </h1>
          <p className="text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px] font-light italic text-white text-center">
            {ProductTextVN.descriptionProductSlogan}
          </p>
        </div>
      </div>
      <div className="border-b border-t flex  justify-between items-center md:px-10 px-3 md:py-6 py-2 md:my-5 my-3 md:gap-10 gap-3">
        <button
          className="flex items-center gap-2 flex-1"
          onClick={() => setOpenFilterBox(!openFilterBox)}
        >
          <FontAwesomeIcon
            icon={faSliders}
            className="w-6 h-6 sm:w-13 sm:h-13"
          />
          <p className="text-lg font-bold uppercase hidden sm:flex">
            {ProductTextVN.filterBoxTitle}
          </p>
        </button>
        <SearchBar
          handleChangeCurrencies={(e) => {
            setFilterList((prev) => ({
              ...prev,
              searchType: e.target.value as string,
            }));
          }}
          handleChangeSearch={(e) => setSearchValue(e.target.value)}
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          currencyValue={filterList.searchType || "name"}
          className="sm:flex-2 flex-4"
        />
        <div className="flex justify-end items-center sm:flex-1 lg:max-w-[1000px] max-w-[100px]">
          <p className="hidden lg:flex uppercase font-bold text-[15px] md:text-[18px] lg:text-[20px] sm:min-w-[150px] min-w-[100px]">
            {`${ProductTextVN.sortBy}:`}
          </p>
          <FormControl sx={{ m: 1, width: "100%" }}>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={sortType}
              onChange={(valueA) => {
                setSortType(valueA.target.value);
                setFilterList((prev) => ({
                  ...prev,
                  priceSort: valueA.target.value,
                  page: 1,
                }));
              }}
            >
              {sortTypeList.map((type) => (
                <MenuItem
                  key={type.label}
                  value={type.value}
                  // style={getStyles(name, personName, theme)}
                >
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center pb-10">
        <div className="flex sm:gap-10 gap-5 w-[95%] justify-center">
          {/* Bộ lọc */}
          {openFilterBox && (
            <div className="sm:w-[25%] w-[45%] border h-fit border-gray-200">
              {/* lọc theo sự kiện */}
              <ListFilter
                listTitle={filterListCate.occasions || []}
                label={ProductTextVN.sortByEvent}
                onChange={(values) => handleFilterChange("occasions", values)}
              />
              {/* lọc theo loài hoa */}
              <ListFilter
                listTitle={filterListCate.types || []}
                label={ProductTextVN.sortByType}
                onChange={(values) => handleFilterChange("types", values)}
              />
              {/* lọc theo kiểu dáng */}
              <ListFilter
                listTitle={filterListCate.forms || []}
                label={ProductTextVN.sortByShape}
                onChange={(values) => handleFilterChange("forms", values)}
              />
              {/* lọc theo giá */}
              {/* <ListFilter
                label={ProductTextVN.sortByPriceLevel}
                isPriceFilter={true}
              /> */}
            </div>
          )}

          {/* Sản phẩm */}
          <div className={`${openFilterBox ? "w-[70%]" : "w-full"}`}>
            {isFetching || isPending || isLoading || isClientLoading ? (
              <div className="w-full h-[700px] flex justify-center items-center">
                <CircularProgress
                  enableTrackSlot
                  size="3rem"
                  sx={{
                    color: "#E32C89",
                  }}
                />
              </div>
            ) : (
              <div
                className={`${data?.data?.length != 0 ? "grid" : ""}  gap-5 ${
                  openFilterBox
                    ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
                    : "lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
                }`}
              >
                {data?.data != null && data?.data?.length > 0 ? (
                  (data?.data as Flower[]).map((item, index) => {
                    return (
                      <FlowerItem
                        key={index}
                        _id={item._id}
                        alt={item.name}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                      />
                    );
                  })
                ) : (
                  <p className={`${fontSizeP}`}>
                    {ProductTextVN.noProductsFound}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        {(data?.total
          ? Math.ceil(data.total / Number(filterList.limited))
          : 0) > 1 ? (
          <Pagination
            count={
              data?.total
                ? Math.ceil(data.total / Number(filterList.limited))
                : 0
            }
            page={filterList.page}
            onChange={(e, value) =>
              setFilterList((prev) => ({
                ...prev,
                page: value,
              }))
            }
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#000",
                borderColor: "#FF69B5",
                fontSize: "15px",
              },
              "& .Mui-selected": {
                backgroundColor: "#FF69B5",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#ff85c1",
                },
              },
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
