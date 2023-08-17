const HomeWhy = () => {
  return (
    <div className="home-why pt-[75px] pb-[92px] mb-[80px]">
      <div className="container">
        <div className="mb-12">
          <div className="w-[462px] mb-8">
            <img src="/title_base.png" className="mx-auto" />
            <h2 className="uppercase tracking-tighter text-[40px] font-bold">
              Tại sao chọn chúng tôi
            </h2>
          </div>
          <p className="text-lg font-medium max-w-[535px]">
            Với những nghệ nhân rang tâm huyết và đội ngũ tài năng cùng những
            câu chuyện trà đầy cảm hứng, ngôi nhà Tea House là không gian dành
            riêng cho những ai trót yêu say đắm hương vị của những lá trà tuyệt
            hảo.
          </p>
        </div>
        <div>
          <div className="flex gap-[22px] mb-[37px]">
            <img
              src="/icon_why_1.png"
              className="flex-shrink-0 w-[54px] h-[54px]"
            />
            <div>
              <h2 className="text-2xl font-bold">Giá cả phải chăng</h2>
              <p className="text-lg font-medium max-w-[367px]">
                Cam kết chỉ cung cấp cà phê có nguồn gốc được kiểm soát chất
                lượng
              </p>
            </div>
          </div>
          <div className="flex gap-[22px] mb-[37px]">
            <img
              src="/icon_why_2.png"
              className="flex-shrink-0 w-[54px] h-[54px]"
            />
            <div>
              <h2 className="text-2xl font-bold">Hương vị tuyệt hảo</h2>
              <p className="text-lg font-medium max-w-[367px]">
                Những đọt trà được lựa chọn cẩn thận ngay từ lúc đang ngâm mình
                trong sương
              </p>
            </div>
          </div>
          <div className="flex gap-[22px] mb-[37px]">
            <img
              src="/icon_why_3.png"
              className="flex-shrink-0 w-[54px] h-[54px]"
            />
            <div>
              <h2 className="text-2xl font-bold">Sản phẩm tự nhiên</h2>
              <p className="text-lg font-medium max-w-[367px]">
                Cam kết chỉ cung cấp lá trà có nguồn gốc được kiểm soát chất
                lượng chặt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhy;
