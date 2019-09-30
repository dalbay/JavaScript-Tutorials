# DOM Project

## Part 1 - UI
*Dynamically add ```<li>``` tags to an unordered list, append ```<a>``` links and inner HTML content to it.*  

1. Add ***materialize*** (responsive front-end framework) to our project. Materialize also needs jQuery as a dependent; download jQuery as well.
  - Here is the link: https://materializecss.com/getting-started.html
  - This tutorial will use the Starter Template - copy files and extract them to your project folder.  
  ***Note:** You'll notice that there are two sets of the files. The min means that the file is "compressed" to reduce load times. These minified files are usually used in production while it is better to use the un-minified files during development.*  

2. Link the files to your webpage. Generally, it is wise to import JavaScript files at the end of the body to reduce page load time. 

```HTML

<!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <!--JavaScript at end of body for optimized loading-->
    <script type="text/javascript" src="js/materialize.min.js"></script>

```

3. The last external script we add to the project is ***Font Awesome*** - *get vector icons and social logos on your website*.
- Here is the link: Search for “font awesome cdn” -> https://www.bootstrapcdn.com/fontawesome/
- Copy the link and paste under materialize.css in your project.  

*Here is the code and layout of the task list.  
![Task list image](./images/domProjectImg.png)
