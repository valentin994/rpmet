<script>
    import Logo from "$lib/assets/logo.svg";
</script>
<div class="border-t p-8 md:pt-8 lg:px-60 text-gray-400">
    <div class="flex flex-col md:flex-row justify-center md:justify-between h-full">
        <div class="flex justify-center">
            <img class="max-w-24" src={Logo} alt="Logo" /> 
        </div>
        <div class="text-center py-2">
            <h1 class="text-primary font-extrabold">Radno vrijeme</h1>
            <p class="">Radnim danom: 08-16h</p>
            <p>Subota: 09-12h</p>
            <p>Nedjelja: Ne radimo!</p>
            <h1 class="text-primary font-extrabold pt-2">Adresa</h1>
            <div class="flex justify-center">
                <p class="max-w-48">Ul. Stjepana Fabijančića Jape 164, 10410, Velika Gorica, Hrvatska</p>
            </div>
        </div>
        <ul class="md:text-sm font-bold hidden md:flex md:flex-col md:text-right justify-center">
            <li>
                <a class="hover:text-primary  transition-all duration-300 ease-in" href="/">POČETNA</a>
            </li>
            <li>
                <a class="hover:text-primary  transition-all duration-300 ease-in" href="/onama">O NAMA</a>
            </li>
            <li>
                <a class="hover:text-primary  transition-all duration-300 ease-in" href="/otkup">OTKUP</a>
            </li>
            <li>
                <a class="hover:text-primary transition-all duration-300 ease-in" href="/">ZBRINJAVANJE</a>
            </li>
            <li>
                <a class="hover:text-primary transition-all duration-300 ease-in" href="/">KONTAKT</a>
            </li>
        </ul>
    </div>

</div>
