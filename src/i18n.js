import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "My account": "My account",
          "Order status": "Order status",
          "Favorites list": "Favorites list",
          "Cart": "Cart",
          "Logout": "Logout",
          "Login": "Login",
          "Register": "Register",
          "Search": "Search",
          "Home": "Home",
          "Customer login": "Customer login",
          "Personal information": "Personal information",
          "First name": "First name",
          "Last name": "Last name",
          "Password": "Password",
          "Password again": "Password again",
          "Introduce": "Introduce",
          "See more": "See more",
          "Red wine": "Red wine",
          "White wine": "White wine",
          "About us": "About us",
          "Contact": "Contact",
          "Grape wine": "Grape wine",
          "Add to cart": "Add to cart",
          "Days": "Days",
          "Hours": "Hours",
          "Minutes": "Minutes",
          "Seconds": "Seconds",
          "New product": "New product",
          "Interested product": "Interested product",
          "Information": "Information",
          "Send": "Send",
          "Delivery": "Delivery",
          "Feelings": "Feelings",
          "Storage": "Storage",
          "Purchase": "Purchase",
          "Transport": "Transport",
          "Return the product": "Return the product",
          "Buy safe products": "Buy safe products",
          "International Shipping": "International Shipping",
          "Link": "Link",
          "Discount service": "Discount service",
          "Email us for support": "Email us for support",
          "Company Address": "Floor 4, Hanoi building group No. 442 Doi Can, P. Cong Vi, Ba Dinh District, Hanoi.",
          "Foreign wine": "Foreign wine",
          "Wine": "Wine",
          "Precious wine": "Precious wine",
          "Unique wine": "Unique wine",
          "Chivas wine": "Chivas wine",
          "Alcohol hundred years": "Alcohol hundred years",
          "Alcohol thousand years": "Alcohol thousand years",
          "Champagne": "Champagne"
        }
      },
      vi: {
        translations: {
          "My account": "Tài khoản của tôi",
          "Order status": "Trạng thái đơn hàng",
          "Favorites list": "Danh sách ưu thích",
          "Cart": "Giỏ hàng",
          "Logout": "Đăng xuất",
          "Login": "Đăng nhập",
          "Register": "Đăng ký",
          "Search": "Tìm kiếm",
          "Home": "Trang chủ",
          "Customer login": "Khách hàng đăng nhập",
          "Personal information": "Thông tin cá nhân",
          "First name": "Họ",
          "Last name": "Tên",
          "Password": "Mật khẩu",
          "Password again": "Nhập lại mật khẩu",
          "Introduce": "Giới thiệu",
          "See more": "Xem thêm",
          "Red wine": "Rượu vang đỏ",
          "White wine": "Rượu trắng",
          "About us": "Thông tin",
          "Contact": "Liên hệ",
          "Grape wine": "Rượu nho",
          "Add to cart": "Thêm vào giỏ",
          "Days": "Ngày",
          "Hours": "Giờ",
          "Minutes": "Phút",
          "Seconds": "Giây",
          "New product": "Sản phẩm mới",
          "Interested product": "Sản phẩm quan tâm",
          "Information": "Thông tin",
          "Send": "Gửi",
          "Delivery": "Giao hàng",
          "Feelings": "Cảm nghĩ",
          "Storage": "Lưu trữ",
          "Purchase": "Mua hàng",
          "Transport": "Vận chuyển",
          "Return the product": "Trả lại hàng hóa",
          "Buy safe products": "Mua hàng an toàn",
          "International Shipping": "Vận chuyển quốc tế",
          "Link": "Liên kết",
          "Discount service": "Dịch vụ giảm giá",
          "Email us for support": "Gửi email cho chúng tôi để được hổ trợ",
          "Company Address": "Tầng 4 tòa nhà Hà Nội group Số 442 Đội Cấn, P.Cống Vị, Q.Ba Đình, Hà Nội.",
          "Foreign wine": "Rượu ngoại",
          "Wine": "Rượu vang",
          "Precious wine": "Rượu quý",
          "Unique wine": "Rượu độc đáo",
          "Chivas wine": "Rượu Chivas",
          "Alcohol hundred years": "Rượu trăm năm",
          "Alcohol thousand yearsyears": "Rượu ngàn năm",
          "Champagne": "Rượu sâm banh"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
