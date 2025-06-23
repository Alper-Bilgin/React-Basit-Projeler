import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import { TextField, Button, Pagination } from "@mui/material";

export default function Home() {
  const [totalCount, setTotalCount] = useState(10); // Kullanıcı sayısı
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Sayfa numarası
  const perPage = 6; // Sayfa başına gösterilecek kullanıcı sayısı

  const totalPages = Math.ceil(totalCount / perPage);

  // Rastgele kullanıcıları alma fonksiyonu
  const fetchUsers = async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=${totalCount}`);
    setUsers(response.data.results);
    setCurrentPage(1); // Sayı değişirse başlangıç sayfasına dön
  };

  // Gösterilecek kullanıcı hesabı
  const paginatedUsers = users.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Rastgele Kullanıcılar Getirme Sayfası</h1>

      <div className="flex gap-4 mb-4 items-center">
        <TextField label="Kullanıcı Sayısı" type="number" value={totalCount} onChange={(e) => setTotalCount(Number(e.target.value))} size="small" />
        <Button variant="contained" onClick={fetchUsers}>
          Getir
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {paginatedUsers.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>

      {users.length > perPage && (
        <div className="flex justify-center mt-6">
          <Pagination count={totalPages} page={currentPage} onChange={(e, value) => setCurrentPage(value)} color="primary" />
        </div>
      )}
    </div>
  );
}
