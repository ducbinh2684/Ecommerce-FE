import { Link } from "react-router-dom";
import { AuthField } from "./AuthField";

export function RegisterForm() {
  return (
    <div className="w-full max-w-md">
      <h1 className="font-display text-3xl font-bold tracking-normal text-luxe-ink">Tạo tài khoản mới</h1>
      <p className="mt-3 text-sm leading-6 text-luxe-mutedText">Chào mừng bạn đến với cộng đồng LUMINA.</p>

      <form className="mt-8 space-y-5">
        <AuthField label="Họ và tên" placeholder="Nguyễn Văn A" />
        <AuthField label="Email" type="email" placeholder="example@lumina.com" />
        <AuthField label="Số điện thoại" type="tel" placeholder="090 1234 567" />
        <AuthField label="Mật khẩu" type="password" placeholder="••••••••" icon="◉" />
        <AuthField label="Xác nhận mật khẩu" type="password" placeholder="••••••••" />

        <label className="flex items-start gap-3 text-sm leading-6 text-luxe-mutedText">
          <input className="mt-1 h-4 w-4 border-luxe-line accent-luxe-primary" type="checkbox" />
          <span>
            Tôi đồng ý với các <a className="font-semibold text-luxe-ink" href="/">Điều khoản sử dụng</a> và{" "}
            <a className="font-semibold text-luxe-ink" href="/">Chính sách bảo mật</a> của LUMINA.
          </span>
        </label>

        <button className="h-12 w-full bg-luxe-primary text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-luxe-primarySoft" type="submit">
          Đăng ký
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-luxe-mutedText">
        Đã có tài khoản?{" "}
        <Link className="font-bold text-luxe-ink transition hover:text-luxe-primarySoft" to="/login">
          Đăng nhập
        </Link>
      </p>

      <div className="mt-12 flex justify-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-luxe-mutedText">
        <a href="/">Hỗ trợ</a>
        <a href="/">Ngôn ngữ Tiếng Việt</a>
      </div>
    </div>
  );
}
