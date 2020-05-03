
var basin = $("#basin")
var itme = $("#its-me")
var page_Track = 0;

function initialize() {
    $("#toggle-grid").removeClass()
    page_Track = JSON.parse(localStorage.getItem("page_Track"));
    if(page_Track == 0) {
        zero()
    } else if(page_Track == 1) {
        one()
    } else if(page_Track == 2) {
        two()
    } else if(page_Track == 3) {
        three()
    } else if(page_Track == 4) {
        four()
    } else {
        zero()
    }
}
$("#profile-button").on("click", function() {
    page_Track = 0;
    zero()
    $("#code-div").empty()
})
$("#javascript-button").on("click", function() {
    page_Track = 1;
    one()
    $("#code-div").empty()
})
$("#school-button").on("click", function() {
    page_Track = 2;
    two()
    $("#code-div").empty()
})
$("#python-button").on("click", function() {
    page_Track = 3;
    three()
})
$("#interest-button").on("click", function() {
    page_Track = 4;
    four()
    $("#code-div").empty()
})
function zero() {    
    itme.empty()
    itme.text("THIS IS ME")
    basin.empty()
    basin.append(`
        <!-- about me -->
        <div id="about-me">
            <h3 id="h3-about">ABOUT ME</h3>
            <div class="little-big">I'M ELLIOTT, A RALEIGH, NC BASED WEB DEVELOPER.</div>
            <br>
            <div class="time-head">1993 - 2011</div>
            <div id="time-body">My interests constantly changed throughout the formative years but always included a <span class="heavy">love of 
                challenging puzzles.</span>
            </div>
            <br>
            <div class="time-head">2011-2017</div>
            <div id="time-body">I graduated from Appalachian State University in 2017 with a double major in Geology and Spanish, 
                as well as a minor in Mathematics. My new found passion for rock climbing in college led me to an interest in 
                geology. Including years in high school, more than <span class="heavy">a decade of spanish prepared me well for 
                the language component</span> present in learning to code. I had no idea what I wanted to do after school so for 
                the next few years I worked in several positions vaguely related to what I'd studied in college.
            </div>
            <br>
            <div class="time-head">2019-present</div>
            <div id="time-body">I had a few friends complete coding bootcamps after college. The work they described to me once 
                they were working as web developers sounded to me like the <span class="heavy">perfect combination of design and 
                problem solving.</span> I spent much of 2019 researching what it means to be a web developer/designer and realized 
                that <span class="heavy">this was my calling.</span> I quit my job in Chattanooga, TN and moved back home to enroll 
                in the Full-Stack Web Development course offered by UNC-Chapel Hill.
            </div>
            <br>
        </div>
        <div id="contact-cont">
            <div id="contact-bar">
                <div class="contact-div"><i class="contact-icon fas fa fa-envelope"></i></div>
                <div class="contact-div"><i class="contact-icon fab fa fa-linkedin"></i></div>
                <div class="contact-div"><i class="contact-icon fab fa fa-twitter"></i></div>
            </div>
            <div id="contact-bar1">
                <div class="contact-div1"><a href="elliottarodgers@gmail.com">elliottarodgers@gmail.com</a></div>
                <div class="contact-div1"><a href="https://www.linkedin.com/in/elliott-rodgers/">https://www.linkedin.com/in/elliott-rodgers/</a></div>
                <div class="contact-div1"><a href="http://twitter.com/elliottarodgers">http://twitter.com/elliottarodgers</a></div>
            </div>
        </div>
        <div id="about-me-cont">
            <div id="exp-ed">
                <div class="col-space">
                    <div class="heavy">Experience</div>
                    <br>
                    <div class="list-item"><span class="heavy">S&ME: </span>Materials Technician, Mar 2019 - Feb 2020</div>
                    <div class="list-item"><span class="heavy">SUMMIT: </span>Materials Technician, Jul 2018 - Mar 2019</div>
                    <div class="list-item"><span class="heavy">Froehling & Robertson, Inc.: </span>Materials Technician, Jan 2018 - Jul 2018</div>
                    <div class="list-item"><span class="heavy">RTI International: </span>Geologist I, Oct 2017 - Jan 2018</div>
                    <div class="list-item"><span class="heavy">Oak Ridge National Laboratory: </span>Research Intern, Jun 2014 - Aug 2014</div>
                </div>
                <div>
                    <div class="heavy">Education</div>
                    <br>
                    <div class="list-item"><span class="heavy">BS degree</span> in Geology at Appalachian State University, 2012 - 2017</div>
                    <div class="list-item"><span class="heavy">BA degree</span> in Spanish at Appalachian State University, 2012 - 2017</div>
                    <div class="list-item"><span class="heavy">Minor</span> in Mathematics at Appalachian State University, 2012 - 2017</div>
                    <div class="list-item">Full-Stack Web Development Bootcamp at UNC-Chapel Hill, 2020</div>
                </div>
            </div>
        </div>
    `)
    localStorage["page_Track"] = JSON.stringify(page_Track);
}
function one() {
    page_Track = 1;
    itme.empty()
    itme.text("LEARNING JAVASCRIPT")
    basin.empty()
    basin.append(`
        <div id="link-cont" class="heavy">
            <h3>javascript</h3>
            <div id="div-grab">
                <div><a href="javascript/rgb/index.html">truly random color rgb format</a></div>
                <div><a href="javascript/hex/index.html">truly random color hex format</a></div>
                <div><a href="javascript/pass_Quote/index.html">print user input to screen</a></div>
                <div><a href="javascript/counter/index.html">increment/decrement value on screen</a></div>
                <div><a href="javascript/image_Slider/index.html">loops through an array of images</a></div>
                <div><a href="javascript/OS_Lat_Long/index.html">display user OS and lat/lon</a></div>
                <div><a href="javascript/tip_Calc/index.html">tool for calculating tips</a></div>
                <div><a href="javascript/calc/index.html">calculator</a></div>
                <div><a href="javascript/color_Grid/index.html">grid of random colored squares</a></div>
            </div>
        </div>
    `)
    $("#div-grab").children().addClass("div-link")
    localStorage["page_Track"] = JSON.stringify(page_Track);
}
function two() {
    page_Track = 2;
    itme.empty()
    itme.text("SCHOOL WORK")
    basin.empty()
    basin.append(`
        <div id="link-cont" class="heavy">
            <h3>school work</h3>
            <div id="div-grab">
                <div><a href="homework/hw_2-portfolio/index.html">mock portfolio</a></div>
                <div><a href="homework/hw_3-password/index.html">password generator</a></div>
                <div><a href="homework/hw_4-multiple_Choice/index.html">multiple choice quiz with javascript</a></div>
                <div><a href="homework/hw_5-workday/index.html">daily calendar with local storage</a></div>
                <div><a href="homework/hw_6-weather/index.html">displays weather for city using api</a></div>
                <div><a href="homework/hw_7-proj_1/index.html">group project, gas/electric car fuel map using api</a></div>
            </div>
        </div>
    `)
    $("#div-grab").children().addClass("div-link")
    localStorage["page_Track"] = JSON.stringify(page_Track);
}
function three() {
    $("#toggle-grid").addClass("flip");
    page_Track = 3;
    itme.empty()
    itme.text("LEARNING PYTHON")
    basin.empty()
    basin.append(`
        <div id="link-cont" class="heavy">
            <h3>personally difficult hackerrank python problems</h3>
            <div id="div-grab">
                <div class="inline"><a target="_blank" href="https://www.hackerrank.com/challenges/diagonal-difference/problem">diagonal difference in matrix</a></div>
                <div id="3-0" class="tab-right">display solution</div>
                <div class="inline"><a target="_blank" href="https://www.hackerrank.com/challenges/staircase/problem">staircase of n height</a></div>
                <div id="3-1" class="tab-right">display solution</div>
                <div class="inline"><a target="_blank" href="https://www.hackerrank.com/challenges/mini-max-sum/problem">mini-max sum</a></div>
                <div id="3-2" class="tab-right">display solution</div>
                <div class="inline"><a target="_blank" href="https://www.hackerrank.com/challenges/the-grid-search/problem">search for embedded matrix</a></div>
                <div id="3-3" class="tab-right">display solution</div>
                <div class="inline"><a target="_blank" href="https://www.hackerrank.com/challenges/happy-ladybugs/problem">check if array is sortable</a></div>
                <div id="3-4" class="tab-right">display solution</div>
                <div class="inline"><a target="_blank" href="https://www.hackerrank.com/challenges/strange-code/problem">strange counter</a></div>
                <div id="3-5" class="tab-right">display solution</div>
            </div>
        </div>
    `)
    $("#div-grab").children().addClass("div-link")
    localStorage["page_Track"] = JSON.stringify(page_Track);
}
function four() {
    page_Track = 4;
    itme.empty()
    itme.text("PERSONAL INTERESTS")
    basin.empty()
    basin.append(`
        <div id="link-cont" class="heavy">
            <h3>my main cycle of activities</h3>
            <div id="activity-split">
                <div id="div-grab">
                    <div id="act-rock">rock climbing</div>
                    <div id="act-run">running</div>
                    <div id="act-read">reading</div>
                    <div id="act-sl">slacklining</div>
                    <div id="act-disc">disc golf</div>
                </div>
            </div>
        </div>
    `)
    $("#div-grab").children().addClass("div-link")
    localStorage["page_Track"] = JSON.stringify(page_Track);
}

initialize()
