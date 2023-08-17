import { Link } from "react-router-dom";

const TimeOpen = () => {
  return (
    <div className="container">
      <div className="flex items-center mb-[95px]">
        <div className="bg-primary pt-[65px] pb-[100px] pl-[65px] pr-[55px] relative">
          <div className="w-[340px] mb-5">
            <img src="/title_base_2.png" className="mx-auto" />
            <h2 className="uppercase text-white tracking-tighter text-[40px] font-bold">
              Thời gian mở cửa
            </h2>
          </div>
          <p className="text-sm text-white font-medium max-w-[535px] leading-[1.7] mb-[25px]">
            “Cà phê nhé" - Một lời hẹn rất riêng của người Việt. Một lời ngỏ mộc
            mạc để mình ngồi lại bên nhau và sẻ chia câu chuyện của riêng mình.
          </p>
          <div className="mb-7">
            <p className="text-lg font-bold text-white leading-[1.7]">
              T2 - T6: 8h30 - 21h30
            </p>
            <p className="text-lg font-bold text-white leading-[1.7]">
              T7 - CN: 8h00 - 22h00
            </p>
          </div>
          <Link
            to=""
            className="rounded-full py-3 px-8 font-bold bg-white text-primary hover:text-white hover:bg-primary hover:border hover:border-gray-200"
          >
            Đặt bàn ngay
          </Link>
          <img src="/vector_datban.png" className="absolute right-3 bottom-0" />
        </div>
        <img
          src="/banner_time_open.png"
          className="w-[500px] h-[405px] object-cover"
        />
      </div>
    </div>
  );
};

export default TimeOpen;
