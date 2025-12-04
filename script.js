const recipes = {
    "rendang": `
        <h2>Rendang (Padang – Sumatra Barat)</h2>
        <h3>Bahan:</h3>
        <ul>
            <li>1 kg daging sapi</li>
            <li>1 liter santan kental</li>
            <li>6 siung bawang merah</li>
            <li>4 siung bawang putih</li>
            <li>5 butir kemiri</li>
            <li>2 batang serai</li>
            <li>4 lembar daun jeruk</li>
            <li>Cabai merah sesuai selera</li>
            <li>Garam, gula secukupnya</li>
        </ul>
    `,

    "sate ayam madura": `
        <h2>Sate Ayam Madura (Jawa Timur)</h2>
        <h3>Bahan sate:</h3>
        <ul>
            <li>500 g daging ayam</li>
            <li>Tusuk sate</li>
            <li>Kecap manis</li>
        </ul>
        <h3>Bahan saus kacang:</h3>
        <ul>
            <li>150 g kacang tanah goreng</li>
            <li>3 bawang putih</li>
            <li>3 bawang merah</li>
            <li>Garam, gula, kecap</li>
            <li>Air secukupnya</li>
        </ul>
    `,

    "rawon": `
        <h2>Rawon (Jawa Timur)</h2>
        <h3>Bahan:</h3>
        <ul>
            <li>500 g daging sapi</li>
            <li>3 sdm kluwek</li>
            <li>6 bawang merah, 4 bawang putih</li>
            <li>Lengkuas, serai, daun jeruk</li>
            <li>Garam, gula</li>
        </ul>
    `,

    "pempek": `
        <h2>Pempek (Palembang – Sumatra Selatan)</h2>
        <h3>Bahan adonan:</h3>
        <ul>
            <li>500 g ikan tenggiri giling</li>
            <li>300–400 g tepung tapioka</li>
            <li>1 butir telur</li>
            <li>Garam, gula, air es</li>
        </ul>
        <h3>Bahan Cuko:</h3>
        <ul>
            <li>Gula merah</li>
            <li>Bawang putih</li>
            <li>Cabai rawit</li>
            <li>Asam jawa</li>
            <li>Garam</li>
        </ul>
    `
};

document.getElementById("searchBtn").addEventListener("click", showRecipe);
document.getElementById("searchInput").addEventListener("keypress", e => {
    if (e.key === "Enter") showRecipe();
});

function showRecipe() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultBox = document.getElementById("recipeResult");

    if (recipes[query]) {
        resultBox.innerHTML = recipes[query];
        resultBox.style.display = "block";
    } else {
        resultBox.innerHTML = "<h3>Resep tidak ditemukan 😢</h3>";
        resultBox.style.display = "block";
    }
}
