var template = [
    '<div class="size-colour-block">',
    '<div class="size-colour-div">',
        '<div class="size">',
            '<p>Size</p>',
        '</div>',
       
        '<div class="colour">',
            '<p>Colour</p>',
        '</div>',
    '</div>',
    '<div class="first-size-div">',
        '<p class="serial-number">#1</p>',
        '<div class="dropdown">',
            '<select name="size" id="size" style="width:60px;margin-left:9px">',
                '<option value="size">S</option>',
            '</select>',
            '<select name="colour" id="colour" style="margin-left:52px">',
                '<option value="colour">Colour</option>',
            '</select>',
        '</div>',
    '</div>',
    '<div class="second-size-div">',
        '<p class="serial-number">#2</p>',
        '<div class="dropdown">',
            '<select name="size" id="size" style="width:60px;margin-left:9px">',
                '<option value="size">S</option>',
            '</select>',
            '<select name="colour" id="colour" style="margin-left:52px">',
                '<option value="colour">Colour</option>',
            '</select>',
        '</div>',
    '</div>',
'</div>'
]

const commonAncestor = document.querySelector('#main_container');
var sizeColourContainers = document.querySelectorAll(".size-colour-container");
var firstPair = document.querySelector(".first-pair");
var secondPair = document.querySelector(".second-pair");
var thirdPair = document.querySelector(".third-pair");  

commonAncestor.addEventListener("click", (event) => {
    var clickedSection = event.target.closest('.first-pair, .second-pair, .third-pair');
    var radio = clickedSection.firstElementChild.firstElementChild
    if (clickedSection) {
        var sizeColourContainer = clickedSection.querySelector('.size-colour-container');
        if (sizeColourContainer) {
            if (sizeColourContainer.style.display === "none" || sizeColourContainer.style.display === "") {
                sizeColourContainer.style.display = "block";
                clickedSection.classList.add("pair-height");
                sizeColourContainer.innerHTML = template.join(' ')
                radio.checked = true
            } else {
                sizeColourContainer.style.display = "none";
                clickedSection.classList.remove("pair-height");
                radio.checked = false
            }
        }
    }
})



