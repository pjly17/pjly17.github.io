// Ambil semua tombol "Beli"
const beliButtons = document.querySelectorAll(".beli-btn");

// Tambahkan event listener untuk setiap tombol "Beli"
beliButtons.forEach(button => {
    button.addEventListener("click", () => {
        const produkCard = button.parentElement;
        const produkNama = produkCard.querySelector("h3").innerText;
        const produkHarga = produkCard.querySelector("p").innerText;
        alert(`Anda telah membeli ${produkNama} dengan harga ${produkHarga}. Terima kasih!`);
    });
});
