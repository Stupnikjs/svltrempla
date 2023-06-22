<script>
    import "@fontsource/voltaire"
    import img from "../image/favicon.png"

    $: loading = false; 

</script>

<div class="relative h-screen">
    <header class="h-10 bg-blue-100 flex items-center bx-shad">
      <a href="/rempla"class="bg-blue-400 p-3 rounded h-1/3 flex items-center voltaire text-sm ml-5" on:click={ e => {loading = true}}> s'identifier </a> 
      <a href="/#"class="bg-blue-400 p-3 rounded h-1/3 flex items-center voltaire text-sm ml-5"> s'inscrire </a> 
    </header>
     <main class="voltaire  m-10">
        <p>
            <strong>Remplace</strong> est une application web pour afficher des 
            remplacements de medecins et les comparer sur une echelle de temps 
        </p>  
        <div class="w-full flex justify-center h-60 items-center">
            {#if loading }
                <div class="lds-dual-ring"></div>
            {:else}
                <i class="fa-solid fa-stethoscope text-5xl"></i>
            {/if}
            
        </div>
        
     </main>
     <footer class="footer voltaire bg-yellow-50 grid grid-cols-2 h-36">
        <div class="flex items-center justify-center">
         <p>Hébergé sur fly.io <i class="fa-brands fa-fly"></i></p>
        </div>
        <div class="flex items-center justify-center">
            <p>Developpé sur svlete </p>
            <div class="w-1/12">
               
                <img src={img} alt="">
            </div> 
        </div>
    </footer>

</div>

<style>

   
    .bx-shad{
        box-shadow: 0.1rem 0.05rem 0.1rem gray ;
    }
    .voltaire{
        font-family: "voltaire", sans-serif;
    }
    a{ 
        text-align: center;
    }

    .footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        
    }
    .footer div:nth-child(1){
        
    }


    .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: black;
    }
    .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
   
   
</style>