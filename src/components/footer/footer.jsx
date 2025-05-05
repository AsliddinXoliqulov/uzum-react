import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t bottom-0 w-full flex justify-between text-center">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="font-semibold mb-3">Biz haqimizda</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Topshirish punktlari</li>
            <li>Vakansiyalar</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Foydalanuvchilarga</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Biz bilan bog‘lanish</li>
            <li>Savol-Javob</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Tadbirkorlarga</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Sotuvchi kabinetiga kirish</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Uzum ijtimoiy tarmoqlarda</h3>
          <div className="flex gap-5 mt-2 justify-center">
            <a href="#" className="text-pink-500 text-2xl"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-sky-400 text-2xl"><i class="fa-brands fa-telegram"></i></a>
            <a href="#" className="text-blue-600 text-2xl"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" className="text-red-600 text-2xl"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer