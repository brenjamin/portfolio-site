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

        <title>ben brophy</title>

    </head>

    <body>

        <div class="nav-btn faded">
            <input type="checkbox" class="nav-btn__checkbox" id="nav-toggle">
            
            <label for="nav-toggle" class="nav-btn__button">
                <span class="nav-btn__icon">

                </span>
            </label>

            <div class="nav-btn__background">
                &nbsp;
            </div>

            <div class="nav-btn__nav">
                <ul class="nav-btn__list">
                    <li class="nav-btn__item"><a href="about.html" class="nav-btn__link">About</a></li>
                    <li class="nav-btn__item"><a href="portfolio.html" class="nav-btn__link">Portfolio</a></li>
                    <li class="nav-btn__item"><a href="contact.php" class="nav-btn__link">Contact</a></li>
                </ul>
            </div>

        </div>

        <div class="container">
            <div class="intro">
                <div class="intro__background"></div>
                <div class="intro__logo-box">
                    <div class="intro__logo">
                        bb
                    </div>
                </div>
            </div>
            
            <nav class="nav-bar">
                <ul class="nav-bar__items">
                    <li class="nav-bar__item"><a href="about.html" class="nav-bar__link">about</a></li>
                    <li class="nav-bar__item"><a href="portfolio.html" class="nav-bar__link">portfolio</a></li>
                    <li class="nav-bar__item"><a href="contact.php" class="nav-bar__link">contact</a></li>
                </ul>
            </nav>

            <header class="header">

                <div class="header__left">
                    <h1 class="heading-1 header__left--text-1"><span class="header__left--hello">Hello<span class="header__left--comma">,</span></span></h1>
                    <h1 class="heading-1 header__left--text-2">I'm Ben.</h1>
                </div>

                <div class="header__right">
                    <h1 class="heading-1 header__right--text-1">Front-end web developer.</h1>
                </div>

                <div class="header__icon-container">
                    <svg class="header__icon">
                        <use xlink:href="img/sprite.svg#icon-chevron-thin-down"></use>
                    </svg>
                </div>
                
            </header>

            
            
            <section class="section-skills" id="skills">
                <h2 class="heading-2">
                    I got skills.
                </h2>

                <div class="skills-container">
                    <div class="skills-about">
                        <p class="paragraph u-margin-bottom-sm">
                            I'm a front-end web developer with an interest in responsive design and best practices in web development.  I am always looking to challenge myself and expand my skill set.  Reach out if you're looking to hire or you need some work done.
                        </p>

                        <p class="paragraph">
                            Check out my skills in the table provided.
                        </p>

                    </div>

                    <div class="skills-box">
                    
                        <div class="skills-box__rank skills-box__rank--big">
                            Skill
                        </div>
                        <div class="skills-box__rank">
                            Beginner
                        </div>
                        <div class="skills-box__rank">
                            Elementary
                        </div>
                        <div class="skills-box__rank">
                            Intermediate
                        </div>
                        <div class="skills-box__rank">
                            Advanced
                        </div> 
                                            
                        <figure class="skills-box__item skills-box__item--html">
                            <img src="img/logo-html.png" alt="HTML5 Logo" class="skills-box__img">
                        </figure>
                        <div class="skills-box__item skills-box__item--dot-blue">&lt;&gt;</div>
                        <div class="skills-box__item skills-box__item--dot-blue">&lt;&gt;</div>
                        <div class="skills-box__item skills-box__item--dot-blue">&lt;&gt;</div> 
                        <div class="skills-box__item skills-box__item--dot-blue">&lt;&gt;</div> 
                    

                        <figure class="skills-box__item skills-box__item--css">
                            <img src="img/logo-css.png" alt="CSS3 Logo" class="skills-box__img">
                        </figure>
                        <div class="skills-box__item skills-box__item--dot-blue">#</div>
                        <div class="skills-box__item skills-box__item--dot-blue">#</div>
                        <div class="skills-box__item skills-box__item--dot-blue">#</div> 
                        <div class="skills-box__item skills-box__item--dot-blue">#</div> 

                        <figure class="skills-box__item skills-box__item--js">
                            <img src="img/logo-js.png" alt="Javascript Logo" class="skills-box__img">
                        </figure>
                        <div class="skills-box__item skills-box__item--dot-blue">{}</div>
                        <div class="skills-box__item skills-box__item--dot-blue">{}</div>
                        <div class="skills-box__item skills-box__item--dot-blue">{}</div> 
                        

                        <figure class="skills-box__item skills-box__item--jq">
                            <img src="img/logo-jq.gif" alt="JQuery Logo" class="skills-box__img">
                        </figure>
                        <div class="skills-box__item skills-box__item--dot-blue skills-box__item--jq-1">$</div>
                        <div class="skills-box__item skills-box__item--dot-blue skills-box__item--jq-2">$</div>
                        <div class="skills-box__item skills-box__item--dot-blue skills-box__item--jq-3">$</div> 

                        <figure class="skills-box__item skills-box__item--wp">
                            <img src="img/logo-wp.png" alt="Wordpress Logo" class="skills-box__img">
                        </figure>
                        <div class="skills-box__item skills-box__item--dot-blue skills-box__item--wp-1"><img class="skills-box__img skills-box__img--sm" src="img/icon-wp.png" alt="Wordpress icon"></div>
                        <div class="skills-box__item skills-box__item--dot-blue skills-box__item--wp-2"><img class="skills-box__img skills-box__img--sm" src="img/icon-wp.png" alt="Wordpress icon"></div>
                        <div class="skills-box__item skills-box__item--dot-blue skills-box__item--wp-3"><img class="skills-box__img skills-box__img--sm" src="img/icon-wp.png" alt="Wordpress icon"></div> 

                        <figure class="skills-box__item skills-box__item--ps">
                            <img src="img/logo-ps.png" alt="Photoshop Logo" class="skills-box__img">
                        </figure>
                        <div class="skills-box__item skills-box__item--dot-blue  skills-box__item--ps-1"><img src="img/icon-magic-wand.png" alt="Magic wand icon" class="skills-box__img skills-box__img--sm"></div>
                        <div class="skills-box__item skills-box__item--dot-blue skills-box__item--ps-2"><img src="img/icon-magic-wand.png" alt="Magic wand icon" class="skills-box__img skills-box__img--sm"></div>

                        <figure class="skills-box__item skills-box__item--php">
                            <img src="img/logo-php.png" alt="PHP Logo" class="skills-box__img">
                        </figure>
                        <div class="skills-box__item skills-box__item--dot-blue skills-box__item--php-1"> &lt;? </div> 
                    
                    </div>
                </div>
            </section>

            <section class="section-portfolio ">
                <h2 class="heading-2">I build stuff.</h2>

                <div class="portfolio__cards u-margin-bottom-sm">
                    
                    <div class="card">
                        <div class="card__side card__side--front">
                            <figure class="card__side--front-img">
                                <img src="img/card-bb.png" alt="bb.io website image">
                            </figure>

                            <h3 class="heading-3">benbrophy.io</h4>
                            

                        </div>
                        <div class="card__side card__side--back">
                            <div class="card__list">
                                
                                    <h4 class="heading-4">Personal site built with:</h3>
                                    <ul class="card__list">
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-html.png" alt="HTML5 logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-css.png" alt="CSS3 logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-js.png" alt="Javascript logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-jq.gif" alt="jQuery logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-ps.png" alt="Photoshop logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-php.png" alt="PHP logo"></li>
                                    </ul>  
                            </div>
                                
                            <a class="card__btn" href="http://www.benbrophy.io">Go</a>
                            
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card__side card__side--front">
                            <figure class="card__side--front-img">
                                <img src="img/card-ilanajoe.png" alt="ilanaandjoe.com website image">
                            </figure>

                            <h3 class="heading-3 h3-small">ilanaandjoe.com</h4>
                            

                        </div>
                        <div class="card__side card__side--back">
                            <div class="card__list">
                                
                                    <h4 class="heading-4">Wedding site built with:</h3>
                                    <ul class="card__list">
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-html.png" alt="HTML5 logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-css.png" alt="CSS3 logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-js.png" alt="Javascript logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-jq.gif" alt="jQuery logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-ps.png" alt="Photoshop logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-php.png" alt="PHP logo"></li>
                                    </ul>  
                            </div>
                                
                            <a class="card__btn" href="http://www.ilanaandjoe.com" target="_blank">Go</a>
                            
                        </div>
                    </div>

                    <div class="card">
                        <div class="card__side card__side--front">
                            <figure class="card__side--front-img">
                                <img src="img/card-simon.png" alt="bb.io website image">
                            </figure>

                            <h3 class="heading-3">Simon</h4>
                            

                        </div>
                        <div class="card__side card__side--back">
                            <div class="card__list">
                                
                                    <h4 class="heading-4">Simon game built with:</h3>
                                    <ul class="card__list">
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-html.png" alt="HTML5 logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-css.png" alt="CSS3 logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-js.png" alt="Javascript logo"></li>
                                        <li class="card__list--item"><img class="card__list--img" src="img/logo-jq.gif" alt="jQuery logo"></li>
                                        
                                    </ul>  
                            </div>
                                
                            <a class="card__btn" href="portfolio/simon">Go</a>
                            
                        </div>
                    </div>

                    
                    
                </div>

                <a href="portfolio.html" class="portfolio__btn btn u-margin-bottom-xsm">See more &rarr;</a>

                
            </section>

            <section class="section-contact" id="contact">
                    <h2 class="heading-2">
                        Contact me.
                    </h2>
                <div class="contact__container u-margin-bottom-sm">

                    <div class="contact__description">
                        
                        <p class=" u-margin-bottom-sm">If you're looking to hire a web developer, or you just need some work done, send me a message using the form on this page.</p>
                        <p class="">Alternatively, you can e-mail me directly at <a href="mailto:ben@benbrophy.io">ben@benbrophy.io</a>.</p>
                    </div>

                    <div class="contact__form-container">
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


        </div>
        <script type="text/javascript" src="js/jquery-3.3.1.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
    </body>

    
</html>



