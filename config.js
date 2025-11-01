/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: "Trọng Khôi   ",
  brideName: " Thu Uyên ",

  weddingDate: "12/08/2025  14:00:00",
  location: "Ngõ Giữa, thôn Đông Cứu, xã Dũng Tiến (cũ), Thường Tín, Hà Nội ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://www.google.com/maps/place/%C4%90%C3%ACnh+%C4%90%C3%B4ng+C%E1%BB%A9u/@20.8216771,105.8605434,1076m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3135b3f6256fffff:0x9e4606f42a2019bc!8m2!3d20.8216771!4d105.8605434!16s%2Fg%2F11txmzfxsv!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4685.8393490007475!2d105.8605434!3d20.8216771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b3f6256fffff%3A0x9e4606f42a2019bc!2zxJDDrG5oIMSQw7RuZyBD4bupdQ!5e1!3m2!1svi!2s!4v1761977113040!5m2!1svi!2s",

  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/ZssnWJmcb2A",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Trọng Khôi ",
      parents: "-<br>Mẹ: Vũ Thị Lan",
      address: "Địa chỉ: Ngõ Giữa, thôn Đông Cứu, xã Dũng Tiến (cũ), Thường Tín, Hà Nội "
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Thu Uyên",
      parents: "Bố: Lưu Xuân Tuấn<br>Mẹ: Vũ Thanh Huyền",
      address: "Địa chỉ:Số 38, ngách 322/17, thôn Nhân Mỹ, phường Mỹ Đình 1 (cũ), Nam Từ Liêm, Hà Nội "
    }
  },

  qr: [
    {src: "assets/QR01.jpg", title: "VU TRONG KHOI", info: "Chân thành cảm ơn"},
    {src: "assets/QR02.jpg", title: "LUU THU UYEN", info: "Chân thành cảm ơn"}
  ],
};
