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
import { useEffect, useRef, useState } from "react";
import ListFilter from "./list_filter";
import { enumSortType, Flower, SearchParamsType } from "@/types/home";
import productApi from "@/services/axios/actions/products.action";
import SearchBar from "@/components/ui/SearchBar";
import { useRouter, useSearchParams } from "next/navigation";

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
  flowerList: Flower[];
  searchParams: SearchParamsType;
};

type FilterListType = {
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

const ProductsList = ({ flowerList, searchParams }: Props) => {
  const fontSizeP =
    "text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px]";
  const fontSizeH1 =
    "text-[30px] md:text-[50px] sm:text-[40px]  lg:text-[80px]";
  const [sortType, setSortType] = useState(enumSortType.priceIncreases);
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [currencyValue, setcurrencyValue] = useState("name");
  const [toalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filterList, setFilterList] = useState<FilterListType>({
    limited: "20",
    forms: [],
    occasions: [],
    types: [],
    priceMax: 500000,
    stockQuantity: enumSortType.priceIncreases,
    priceSort: sortType,
    searchType: "name",
    keyword: "",
    page: 1,
    priceMin: 0,
  });
  const [flowers, setFlowers] = useState<Flower[]>(flowerList);
  const router = useRouter();
  const searchParam = useSearchParams();
  const isFirstRender = useRef(true);
  const handleSubmit = () => {
    setFilterList((prev) => ({
      ...prev,
      keyword: searchValue,
      searchType: currencyValue,
      page: 1,
    }));
  };

  useEffect(() => {
    const paramsWeb = new URLSearchParams(searchParam.toString());

    const keyword = paramsWeb.get("keyword") ?? "";
    const searchType = paramsWeb.get("searchType") ?? "name";

    const sortParam = paramsWeb.get("sort") ?? "";
    let priceSort = "asc";
    let stockQuantity = "desc";

    if (sortParam) {
      const priceMatch = sortParam.match(/price:(\w+)/);
      const stockMatch = sortParam.match(/stockQuantity:(\w+)/);
      if (priceMatch?.[1]) priceSort = priceMatch[1];
      if (stockMatch?.[1]) stockQuantity = stockMatch[1];
    }
    setSearchValue(keyword);
    setcurrencyValue(searchType);
    setSortType(priceSort);
    setFilterList({
      limited: paramsWeb.get("limit") ?? "20",
      forms: (paramsWeb.get("forms")?.split(",") ?? []) as string[],
      occasions: (paramsWeb.get("occasions")?.split(",") ?? []) as string[],
      types: (paramsWeb.get("types")?.split(",") ?? []) as string[],
      priceMax: paramsWeb.get("priceMax")
        ? Number(paramsWeb.get("priceMax"))
        : 500000,
      priceMin: paramsWeb.get("priceMin")
        ? Number(paramsWeb.get("priceMin"))
        : 0,
      stockQuantity,
      priceSort,
      searchType,
      keyword,
      page: paramsWeb.get("page") ? Number(paramsWeb.get("page")) : 1,
    });
  }, [searchParam]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
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
      console.log("paramsWeb =====", Object.fromEntries(paramsWeb));
      try {
        const res = await productApi.search(Object.fromEntries(paramsWeb));
        setFlowers(res.data || []);
        setTotalPages(Math.ceil(res.total / Number(filterList.limited)));
      } catch (error) {
        console.error("Fetch products failed:", error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [JSON.stringify(filterList)]);

  const handleFilterChange = (key: string, values: string[] | number[]) => {
    setFilterList((prev) => ({
      ...prev,
      [key]: values,
    }));
  };

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
          <h1 className="text-[30px] md:text-[50px] sm:text-[40px]  lg:text-[80px] font-bold text-white text-center">
            Sản phẩm của chúng tôi
          </h1>
          <p className="text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px] font-light italic text-white text-center">
            "FloraVNU mang đến những đóa hoa tươi nhất, gửi gắm yêu thương và
            khoảnh khắc lãng mạn đến người bạn trân quý."
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
          <p className="text-lg font-bold uppercase hidden sm:flex">Bộ lọc</p>
        </button>
        <SearchBar
          handleChangeCurrencies={(e) => {
            // setFilterList((prev) => ({
            //   ...prev,
            //   searchType: e.target.value,
            // }));
          }}
          handleChangeSearch={(e) => setSearchValue(e.target.value)}
          handleSubmit={handleSubmit}
          searchValue={searchValue}
          currencyValue={filterList.searchType || "name"}
          className="sm:flex-2 flex-4"
        />
        <div className="flex justify-end items-center sm:flex-1 lg:max-w-[1000px] max-w-[100px]">
          <p className="hidden lg:flex uppercase font-bold text-[15px] md:text-[18px] lg:text-[20px] sm:min-w-[150px] min-w-[100px]">
            Sắp xếp theo:
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
      <div className="flex flex-col gap-10 items-center pb-10 md:px-10 px-3">
        <div className="flex sm:gap-10 gap-5 w-[95%] justify-center">
          {/* Bộ lọc */}
          {openFilterBox && (
            <div className="sm:w-[25%] w-[45%] border h-fit border-gray-200">
              {/* lọc theo sự kiện */}
              <ListFilter
                listTitle={filterType.event}
                label="Theo sự kiện"
                onChange={(values) => handleFilterChange("occasions", values)}
              />
              {/* lọc theo loài hoa */}
              <ListFilter
                listTitle={filterType.flowerType}
                label="Theo loài hoa"
                onChange={(values) => handleFilterChange("types", values)}
              />
              {/* lọc theo kiểu dáng */}
              <ListFilter
                listTitle={filterType.shapeType}
                label="Theo kiểu dáng"
                onChange={(values) => handleFilterChange("forms", values)}
              />
              {/* lọc theo giá */}
              <ListFilter label="Theo mức giá" isPriceFilter={true} />
            </div>
          )}

          {/* Sản phẩm */}
          <div className={`${openFilterBox ? "w-[70%]" : "w-full"}`}>
            {isLoading ? (
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
                className={`${flowers.length != 0 ? "grid" : ""}  gap-5 ${
                  openFilterBox
                    ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
                    : "lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2"
                }`}
              >
                {flowers != null && flowers.length > 0 ? (
                  (flowers as Flower[]).map((item, index) => {
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
                    Không có sản phẩm nào phù hợp với bạn!
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        {flowers.length != 0 ? (
          <Pagination
            count={toalPages}
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
