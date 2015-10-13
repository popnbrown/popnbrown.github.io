/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
 	"name": "Sravan K. Suryadevara",
 	"role": "Front-End Ninjaneer",
 	"contacts": {
 		"mobile": "908-432-5330",
 		"email": "sravan.suryadevara@gmail.com",
 		"github": "https://github.com/popnbrown",
 		"twitter": "https://twitter.com/popnbrown",
 		"location": "Chicago, IL"
 	},
 	"welcomeMessage": "Welcome to my Interactive Resume!",
 	"skills": ["HTML", "CSS", "Javascript", "C#", "PHP"],
 	"biopic": "https://media.licdn.com/mpr/mpr/shrinknp_300_300/p/3/005/0b9/23c/21e4704.jpg",
 	display: function() {
		$('#header').append(HTMLheaderName.replace("%data%", bio.name));
		$('#header').append(HTMLheaderRole.replace("%data%", bio.role));
		$('#topContacts').append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$('#topContacts').append(HTMLemail.replace("%data%", bio.contacts.email));
		$('#topContacts').append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$('#topContacts').append(HTMLgithub.replace("%data%", bio.contacts.github));
		$('#topContacts').append(HTMLlocation.replace("%data%", bio.contacts.location));
		$('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
		$('#header').append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$('#header').append(HTMLskillsStart);
		$.each(bio.skills, function(index,value) {
			$('#header').append(HTMLskills.replace("%data%",value));
		});
 	}
 };

 var education = {
 	"schools": [
 		{
 			"name": "University of Illinois at Urbana-Champaign",
 			"location": "Urbana, IL",
 			"degree": "Bachelor of Science",
 			"majors": ["Computer Science", "Ramen Noodles"],
 			"dates": 2013,
 			"url": "https://Illinois.edu"
 		},
 		{
 			"name": "Montgomery High School",
 			"location": "Skillman, NJ",
 			"degree": "General Education",
 			"majors": ["General"],
 			"dates": 2009,
 			"url": "http://mtsd.k12.nj.us"
 		}
 	],
 	"onlineCourses": [
 		{
 			"title": "Responsive Images",
 			"school": "Udacity",
 			"date": 2015,
 			"schoolurl": "https://udacity.com",
 			"url": "https://www.udacity.com/course/responsive-images--ud882"
 		},
 		{
 			"title": "Introduction to Key Constitutional Concepts and Supreme Court Cases",
 			"school": "Coursera",
 			"date": 2014,
 			"schoolurl": "https://coursera.com",
 			"url": "https://www.coursera.org/course/constitution"
 		}
 	],
 	display: function() {
 		$.each(education.schools, function(index, value) {
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLschoolName.replace("%data%",value.name).replace("#",value.url));
			$('.education-entry:last').append(HTMLschoolDegree.replace("%data%",value.degree));
			$('.education-entry:last').append(HTMLschoolDates.replace("%data%",value.dates));
			$('.education-entry:last').append(HTMLschoolLocation.replace("%data%",value.location));
			$.each(value.majors, function(index, value) {
				$('.education-entry:last').append(HTMLschoolMajor.replace("%data%",value));
			});
 		});
 		$('#education').append(HTMLonlineClasses);
 		$.each(education.onlineCourses, function(index, value) {
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLonlineTitle.replace("%data%",value.title).replace("#",value.schoolurl));
			$('.education-entry:last').append(HTMLonlineSchool.replace("%data%",value.school));
			$('.education-entry:last').append(HTMLonlineDates.replace("%data%",value.date));
			$('.education-entry:last').append(HTMLonlineURL.replace("%data%",value.url).replace("#",value.url));
 		})
 	}
 };

 var work = {
 	"jobs": [
 		{
 			"employer": "One North Interactive",
 			"title": "Developer",
 			"location": "Chicago, IL",
 			"dates": "July 1, 2013 - August 15, 2015",
 			"description": "Built medium to large web application and assisted in ongoing maintenance"
 		},
 		{
 			"employer": "FIRST",
 			"title": "Drupal Developer",
 			"location": "Manchester, NH",
 			"dates": "August 15, 2015 - ",
 			"description": "Assist in redesigning new site, and maintaining all website assets"
 		}
 	],
 	display: function(){
 		$.each(work.jobs, function(index, value) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace("%data%",value.employer));
			$('.work-entry:last').append(HTMLworkTitle.replace("%data%",value.title));
			$('.work-entry:last').append(HTMLworkDates.replace("%data%",value.dates));
			$('.work-entry:last').append(HTMLworkLocation.replace("%data%",value.location));
			$('.work-entry:last').append(HTMLworkDescription.replace("%data%",value.description));
 		});
 	}
 };

 var projects = {
 	"projects": [
 		{
 			"title": "Illinois FIRST Maps",
 			"dates": "December 2013 - March 2014",
 			"description": "Created a listing of all Illinois FIRST teams in a map",
 			"images": ["http://popnbrown.github.io/nanodegree-resume/ilfirstmaps1-300.png","http://popnbrown.github.io/nanodegree-resume/ilfirstmaps2-300.png"]
 		},
 		{
 			"title": "The Blue Alliance",
 			"dates": "December 2013 - Present",
 			"description": "Help with bugs for the TBA web app",
 			"images": ["http://popnbrown.github.io/nanodegree-resume/tba1-300.png"]
 		}
 	],
 	display: function(){
 		$.each(projects.projects, function(index, value) {
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace("%data%",value.title));
			$('.project-entry:last').append(HTMLprojectDates.replace("%data%",value.dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace("%data%",value.description));
			$.each(value.images, function(index, value) {
				$('.project-entry:last').append(HTMLprojectImage.replace("%data%",value));
			});
 		});
 	}
 };


bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);