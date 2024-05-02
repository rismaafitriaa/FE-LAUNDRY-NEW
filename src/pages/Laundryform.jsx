// import React, { useState } from "react";
// import "./Laundryform.css"; // Import file CSS baru

// const LaundryForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     address: "",
//     packageType: "",
//     weight: "",
//     orderInDate: "",
//     orderOutDate: "",
//     notes: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Kirim data formulir ke layanan backend
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="laundry-form">
//       {/* <h3>Cuci Komplit</h3> */}
//       <div className="form-group">
//         <label htmlFor="fullName">Nama Pelanggan</label>
//         <input
//           type="text"
//           name="fullName"
//           id="fullName"
//           value={formData.fullName}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="phoneNumber">Nomor Telepon</label>
//         <input
//           type="tel"
//           name="phoneNumber"
//           id="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="address">Alamat</label>
//         <textarea
//           name="address"
//           id="address"
//           value={formData.address}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="packageType">Pilih Paket</label>
//         <select
//           name="packageType"
//           id="packageType"
//           value={formData.packageType}
//           onChange={handleInputChange}
//           required
//         >
//           <option value="">-- Pilih Jenis Paket --</option>
//           <option value="cuci_kering">Cuci Kering</option>
//           <option value="cuci_kering_setrika">Cuci Kering Setrika</option>
//           <option value="cuci_satuan">Cuci Satuan</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="weight">Berat (Kg)</label>
//         <input
//           type="number"
//           name="weight"
//           id="weight"
//           value={formData.weight}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="orderInDate">Tanggal Order Masuk</label>
//         <input
//           type="date"
//           name="orderInDate"
//           id="orderInDate"
//           value={formData.orderInDate}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="orderOutDate">Tanggal Order Keluar</label>
//         <input
//           type="date"
//           name="orderOutDate"
//           id="orderOutDate"
//           value={formData.orderOutDate}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="notes">Keterangan</label>
//         <textarea
//           name="notes"
//           id="notes"
//           value={formData.notes}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="submit" className="btn-submit">
//         Pesan
//       </button>
//     </form>
//   );
// };

// export default LaundryForm;
