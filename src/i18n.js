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
          "Tài khoản của tôi": "My account",
          "Trạng thái đơn hàng": "Order status",
          "Danh sách ưu thích": "Favorites list",
          "Giỏ hàng": "Cart",
          "Đăng xuất": "Logout",
          "Đăng nhập": "Login",
          "Đăng ký": "Register",
          "Tìm kiếm": "Search",
          "Trang chủ": "Home",
          "Khách hàng đăng nhập": "Customer login",
          "Thông tin cá nhân": "Personal information",
          "Họ": "First name",
          "Tên": "Last name",
          "Mật khẩu": "Password",
          "Nhập lại mật khẩu": "Password again"
        }
      },
      vi: {
        translations: {
          "Tài khoản của tôi": "Tài khoản của tôi",
          "Trạng thái đơn hàng": "Trạng thái đơn hàng",
          "Danh sách ưu thích": "Danh sách ưu thích",
          "Giỏ hàng": "Giỏ hàng",
          "Đăng xuất": "Đăng xuất",
          "Đăng nhập": "Đăng nhập",
          "Đăng ký": "Đăng ký",
          "Tìm kiếm": "Tìm kiếm",
          "Trang chủ": "Trang chủ",
          "Khách hàng đăng nhập": "Khách hàng đăng nhập",
          "Thông tin cá nhân": "Thông tin cá nhân",
          "Họ": "Họ",
          "Tên": "Tên",
          "Mật khẩu": "Mật khẩu",
          "Nhập lại mật khẩu": "Nhập lại mật khẩu"
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
