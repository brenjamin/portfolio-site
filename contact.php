<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700,900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Bitter:400,700" rel="stylesheet">
        <link rel="shortcut icon" type="image/png" href="img/bb-favicon.png">

        <?php include("../php/contact-me.php"); ?>

        <title>contact</title>

    </head>

    <body>
        <nav class="nav-bar">
            <div class="nav-bar__logo-box">
                
                <a class="nav-bar__logo" href="index.php">bb</a>
                
            </div>

            <ul class="nav-bar__items">
                <li class="nav-bar__item"><a href="about.html" class="nav-bar__link">about</a></li>
                <li class="nav-bar__item"><a href="portfolio.html" class="nav-bar__link">portfolio</a></li>
                <li class="nav-bar__item"><a href="contact.php" class="nav-bar__link">contact</a></li>
            </ul>
        </nav>
        
    <main class="main">
        <section class="contact" id="contact">
                <h2 class="heading-2">
                    Contact me.
                </h2>
            <div class="contact__container u-margin-bottom-sm">

                <div class="contact__description">
                    
                    <p class=" u-margin-bottom-sm">If you're looking to hire a web developer, or you just need some work done, send me a message using the form on this page.</p>
                    <p class="">Alternatively, you can e-mail me directly at <a href="mailto:ben@benbrophy.io">ben@benbrophy.io</a>.</p>
                </div>

                <div class="contact__form-container ">
                    <form action="<?= $_SERVER['PHP_SELF']; ?>#contact" method="post" class="form">
                        <div class="form__group">
                            <input type="text" placeholder="Name" name="name" id="name" class="form__input" value="<?php echo isset($_POST["name"]) ? $_POST["name"] : ''; ?>" >
                            <label for="name" class="form__label">Name</label>
                            <p class="form__php"><?= $name_error ?></p>

                        </div>
                        
                        <div class="form__group">
                            <input type="email" placeholder="E-mail Address" id="emailaddress" class="form__input" name="email" value="<?php echo isset($_POST["email"]) ? $_POST["email"] : ''; ?>">
                            <label for="emailaddress" class="form__label">E-mail Address</label>
                            <p class="form__php"><?= $email_error ?></p>
                        </div>

                        <div class="form__group">
                            <textarea class="form__textarea" name="message" id="msg" placeholder="Type your message here" cols="30" rows="10" ><?php echo isset($_POST["message"]) ? $_POST["message"] : ''; ?></textarea>
                            <p class="form__php"><?= $message_error ?></p>
                        </div>

                        <div class="form__group">
                            <input type="submit" class="form__submit">
                        </div>
                        
                        <div class="form__php success"> <?= $success ?></div>
                        <div class="form__php error"> <?= $error ?></div>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <ul class="footer__links">
            <li class="footer__item">
                <a href="https://github.com/brenjamin" class="footer__link" target="_blank">
                    <svg class="footer__icon">
                        <use xlink:href="img/sprite.svg#icon-github"></use>
                    </svg>
                </a>
            </li>
            <li class="footer__item">
                <a href="https://www.linkedin.com/in/benjamin-brophy-37a830117/" class="footer__link" target="_blank">
                    <svg class="footer__icon">
                        <use xlink:href="img/sprite.svg#icon-linkedin2"></use>
                    </svg>
                </a>
            </li>
            <li class="footer__item">
                <a href="https://www.freecodecamp.org/brenjamin" target="_blank" class="footer__link">
                    <i class="fab fa-free-code-camp"></i>
                </a>
            </li>

            <li class="footer__item">
                <a href="mailto:ben@benbrophy.io" class="footer__link">
                    <svg class="footer__icon">
                        <use xlink:href="img/sprite.svg#icon-envelop" target="_blank"></use>
                    </svg>
                </a>
            </li>
        </ul>
        <div class="footer__copyright">
            Copyright &copy;2018 by Ben Brophy
        </div>
    </footer>

</body>