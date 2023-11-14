<template>
    <footer>
        <div class="infos">
            <div class="ender_email_tele">
                <h4><strong>Entre em contato:</strong></h4>
                <p class="endereco">Av. João Pinheiro nº 983 <br> Belo Horizonte - MG </p>
                
                <p class="email"><i class="bi bi-envelope"></i><strong>E-mail:</strong> <i>adote_aiAnimais@gmail.com</i></p>
                <p class="telefone"><i class="bi bi-telephone"></i><strong>Telefone:</strong> <i><u>+55 0800 813 7642</u></i></p>

            </div>
            <div class="parcerias">
                <h4><strong>Parcerias:</strong></h4>
                <div class="parceiros">
                    <div class="linha1">
                        <a target="_blank" rel="noopener noreferrer" href="//www.petz.com.br/" class="petz"><img src="https://static-file.petz.com.br/platforms/img/ds/petz/logo-petz_rebranding-primary.svg" alt="Logo Petz" loading="lazy"></a>
                        <a target="_blank" rel="noopener noreferrer" href="//www.seres.vet/" class="seres"><img src="https://seres.vet/images/logo.webp" alt="Logo Petz" loading="lazy"></a>
                    </div>
                    <div class="linha2">
                        <a target="_blank" rel="noopener noreferrer" href="//supersecao.pet/" class="supersecao"><img src="https://supersecao.pet/wp-content/uploads/2016/12/logo.png" alt="Logo super cao" loading="lazy"></a>
                        <a target="_blank" rel="noopener noreferrer" href="//petsociety.com.br/" class="petsociety"><img src="https://petsociety.com.br//assets/images/logo.png" alt="Logo agener" loading="lazy"></a>    
                    </div>
                    <div class="linha3">
                        <a target="_blank" rel="noopener noreferrer" href="//www.saopet.com.br/" class="saopet"><img src="https://saopet.com.br/image/catalog/logo/xbJ1obtN8jEyY8Zem15I.png" alt="Logo sao pet" loading="lazy"></a>
                        <a target="_blank" rel="noopener noreferrer" href="//www.guabinatural.com.br/" class="guabinatural"><img src="https://www.guabinatural.com.br/wp-content/uploads/2022/05/logo-guabi-natural.svg" alt="Logo guabiNatural" loading="lazy"></a>    
                    </div>
                    <div class="linha4">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.adotebicho.com.br" class="adotebicho"><img src="https://adotebicho.com.br/storage/app/logo/thumb-500x100-logo-62fc3f275c2dd.png" alt="adote bicho" class="tooltipHere main-logo" title="" data-placement="bottom" data-toggle="tooltip" data-original-title=""></a>
                    </div>
                </div>
            </div>
            <div class="siga-nos">
                <h4><strong>Siga-nos</strong></h4>
                <div class="contas-sociais">
                    <a target="_blank"  href="https://www.facebook.com/"><img srcset="https://img.icons8.com/?size=256&amp;id=jZ0kw76QEzJU&amp;format=png 1x, https://img.icons8.com/?size=512&amp;id=jZ0kw76QEzJU&amp;format=png 2x" alt="Facebook Circled icon" class="icone-facebook"></a>
                    <a target="_blank" href="https://www.instagram.com/"><img srcset="https://img.icons8.com/?size=256&amp;id=nj0Uj45LGUYh&amp;format=png 1x, https://img.icons8.com/?size=512&amp;id=nj0Uj45LGUYh&amp;format=png 2x" alt="Instagram icon" class="icone-instagram"></a>
                    <a target="_blank" href="https://web.whatsapp.com/"><img srcset="https://img.icons8.com/?size=256&amp;id=DUEq8l5qTqBE&amp;format=png 1x, https://img.icons8.com/?size=512&amp;id=DUEq8l5qTqBE&amp;format=png 2x" alt="WhatsApp icon" class="icone-whatsapp"></a>
                    <a target="_blank" href="https://twitter.com/"><img alt="Nova logo do twitter" src="https://static.vecteezy.com/system/resources/previews/027/122/147/non_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default ({
        name: "SobreNosFooter"
    })
</script>

<style scoped>
    .infos{
        height: 300px;
        background-color: #59535f;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        color: white;
    }

    .infos p{
        margin: 0px;
        padding: 0px;
    }

    .ender_email_tele{
        display: flex;
        flex-flow: column;
    }

    .ender_email_tele h4{
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .ender_email_tele p{
        font-size: 16px;
    }

    p.endereco{
        margin-bottom: 30px;
    }

    .bi-envelope, .bi-telephone{
        margin-right: 10px;
    }

    .parcerias{
        width: 250px;
        display: flex;
        flex-flow: column;
    }

    .parcerias h4{
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .parceiros{
        width: 100%;
        height: 75%;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-around;
    }

    .linha1, .linha2, .linha3, .linha4{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    .parceiros a{
        width: fit-content;
        height: fit-content;
        padding: 0px;
    }

    .petz img{
        width: 60px;
        height: 30px;
        margin-right: 50px;
    }

    .seres img{
        width: 75px;
        height: 25px;
    }

    .supersecao img{
        width: 70px;
        height: 40px;
        margin-right: 50px;
    }

    .petsociety img{
        width: 55px;
        height: 50px;
    }

    .saopet img{
        width: 55px;
        height: 50px;
        margin-left: 10px;
        margin-right: 45px;
    }

    .guabinatural img{
        background-color: white;
        width: 80px;
        height: 50px;
    }

    .adotebicho img{
        width: 200px;
        height: 40px;
    }

    a.adotebicho{
        margin-right: 0px;
    }

    .siga-nos{
        width: 250px;
        display: flex;
        flex-flow: column;
    }

    .siga-nos h4{
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .contas-sociais{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }

    .contas-sociais img{
        width: 50px;
        height: 50px;
    }

    /* Smartphones (600px para baixo) */
    @media only screen and (max-width: 600px) {
        .infos{
            height: fit-content;
            flex-flow: column-reverse wrap;
            justify-content: space-evenly;
            align-items: center;
        }

        .ender_email_tele, .parcerias, .siga-nos {
            margin-top: 20px;
        }

        .ender_email_tele{
            margin-bottom: 20px;
        }

        .parcerias h4{
            margin-bottom: 8px;
        }

        .parceiros{
            height: 210px;
        }
        
        .parceiros{
            align-items: center;
        }
    }

    @media only screen and (min-width: 601px) and (max-width: 669px) {
        .infos{
            height: fit-content;
            align-items: center;
        }

        .ender_email_tele{
            width: 100%;
            margin-top: 30px;
            margin-left: 25%;
        }

        .parcerias{
            margin-top: 30px;
            margin-bottom: 20px;
            width: fit-content;
        }

        .siga-nos{
            width: 40%;
            margin-top: 15px;
            margin-bottom: 20px;
            align-items: center;
        }

        .parcerias h4{
            margin-bottom: 8px;
        }

        .parceiros{
            height: 210px;
        }

        .contas-sociais img{
            margin-bottom: 10px;
        }
    }

    /*Dispostivos Médios (Tablets deitados, até 768px) */
    @media only screen and (min-width: 670px) and (max-width: 782px) {
        .infos{
            height: fit-content;
            flex-flow: row wrap;
            justify-content: space-evenly;
            align-items: center;
        }

        .ender_email_tele, .parcerias{
            margin-top: 30px;
            width: fit-content;
        }

        .siga-nos{
            width: 40%;
            margin-top: 15px;
            margin-bottom: 20px;
            align-items: center;
        }

        .parcerias h4{
            margin-bottom: 8px;
        }

        .parceiros{
            height: 210px;
        }
    }

    @media only screen and (min-width: 783px) and (max-width: 920px) {
        .infos{
            height: fit-content;
            flex-flow: row wrap;
            justify-content: space-evenly;
            align-items: center;
        }

        .ender_email_tele, .parcerias{
            margin-top: 30px;
            width: fit-content;
        }

        .siga-nos{
            width: 40%;
            margin-top: 15px;
            margin-bottom: 20px;
            align-items: center;
        }

        .parcerias h4{
            margin-bottom: 8px;
        }

        .parceiros{
            height: 210px;
        }
    }

    @media only screen and (min-width: 921px) {
        .parcerias{
            width: fit-content;
            margin-left: 10px;
        }
    }
</style>