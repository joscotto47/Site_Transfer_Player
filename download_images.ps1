$images = @{
    "gabigol.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Gabriel_Barbosa_2021.jpg/250px-Gabriel_Barbosa_2021.jpg";
    "neymar.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/250px-Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg";
    "arana.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Guilherme_Arana_2021.jpg/250px-Guilherme_Arana_2021.jpg";
    "hulk.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Hulk_2021.jpg/250px-Hulk_2021.jpg";
    "oscar.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Oscar_Emboaba_2018.jpg/250px-Oscar_Emboaba_2018.jpg";
    "gerson.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Gerson_2021.jpg/250px-Gerson_2021.jpg";
    "renan_lodi.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Renan_Lodi_2019.jpg/250px-Renan_Lodi_2019.jpg";
    "vina.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Matias_Vi%C3%B1a_2021.jpg/250px-Matias_Vi%C3%B1a_2021.jpg";
    "maycon.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Maycon_de_Andrade_Barberan.jpg/200px-Maycon_de_Andrade_Barberan.jpg";
    "gabriel_paulista.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Gabriel_Armando_de_Abreu.jpg/200px-Gabriel_Armando_de_Abreu.jpg"
}

foreach ($name in $images.Keys) {
    $url = $images[$name]
    $output = "images\$name"
    Write-Host "Downloading $name from $url..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $output -UserAgent "Mozilla/5.0"
        Write-Host "Success."
    } catch {
        Write-Host "Error downloading $name : $_"
    }
}
