export default function ASide() {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 flex-row w-100"
      id="sidenav-main"
    >
      <div className="sidenav-header">
        <i
          className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
          id="iconSidenav"
        ></i>
        <a className="navbar-brand m-0" href="#" target="_blank">
          <span className="ms-1 font-weight-bold text-lg">UKS Moklet</span>
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div
        className="collapse navbar-collapse w-auto"
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-a active" href="/siswa">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-house"></i>
              </div>
              <span className="nav-a-text ms-1">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-a active" href="/siswa/profil">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-table"></i>
              </div>
              <span className="nav-a-text ms-1">Profil User</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-a active" href="/siswa/riwayat">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-table"></i>
              </div>
              <span className="nav-a-text ms-1">Riwayat Periksa</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-a active" href="/siswa/permintaan">
              <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i className="fa fa-table"></i>
              </div>
              <span className="nav-a-text ms-1">Pemintaan Obat</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer mx-3">
        <button
          className="btn btn-danger btn-sm mb-0 w-100"
          type="button"
        >
          Log Out{" "}
          <i className="fa-solid fa-arrow-right-from-bracket" aria-hidden></i>
        </button>
      </div>
    </aside>
  );
}