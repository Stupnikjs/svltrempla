<script>
    import "@fontsource/voltaire"
    import img from "../image/favicon.png"
</script>

<style>

   
    .voltaire{
        font-family: "voltaire", sans-serif;
    }


    .footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        
    }
  
   
</style>


<footer class="footer voltaire bg-yellow-50 grid grid-cols-2 h-36">
    <div class="flex items-center justify-center">
     <p>Hébergé sur fly.io <i class="fa-brands fa-fly"></i></p>
    </div>
    <div class="flex items-center justify-center">
        <p>Developpé avec svletekit </p>
        <div class="w-1/12">
            <img src={img} alt="">
        </div> 
    </div>
</footer>