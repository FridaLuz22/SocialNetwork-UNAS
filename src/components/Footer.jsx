function Footer() {
  return (
    <footer>
      <div className="fixed px-4 bottom-3 w-full flex justify-center">
        <div className="flex gap-20"> {/* Aumenté el valor de gap a 8 para más separación */}
          <a href="">
            <img src="../public/assets/icons/icon_logo.png" alt="" />
          </a>
          <a href="">
            <img src="../public/assets/icons/icon_video.png" alt="" />
          </a>
          <a href="">
            <img src="../public/assets/icons/icon_more.png" alt="" />
          </a>
          <a href="">
            <img src="../public/assets/icons/icon_map.png" alt="" />
          </a>
          <a href="">
            <img src="../public/assets/icons/cuenta_icon.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
