* 																				   *
* THIAGO MACIEL                                                                    *
* Software Developer						                                       *
* Bsc. system Analysis and Dvelopment and MBA Project Management                   *
* The University of Positivo (Brazil)                                              *
* thifalo@outlook.com                                                              *
* Sunday 25 February 2018  													       *
* 																				   *
* ---------------------------------------------------------------------------------*
**
* PREVISÃO DO TEMPO APPLICATION
*
* This file contains a general description of the application and configuration
* instructions
*
**
* ---------------------------------------------------------------------------------*/

1. INTRODUCTION
	
	1.1 Project Description

		The challenge was to develop the frontend of a single page application for a
		weather forecast. where users can see input the city name and find a city's
        weather forecast in a grid.

		The code was divided in two parts, fron-end and back and.

	1.2 Resources Used

		- Backend:

		The backend API that was made using C# (WebApi) MVC. There are no database used,
        the project will note use persistence on database.

		-About the structure of backend:
			|...PrevisaoTempo
				|...Model	//Contains all models files (db config, extensions, etc...)
				|...Service
					|...BizService	// Contains all business project files (rules) and interfaces
					|...EntityService	// Contains all Entity files and interfaces
			|...PrevisaoTempo.Api
				|...Controller	// Contains all controllers of the project
				|...Dto		// Contains Data Transfer Object files
				|...Extension	// Contains all extension methods (convert files DTO to TO, etc...)
				|...Program.cs	// Start Class with all config. to run the project as a Self-Host.
			|...PrevisaoTempo.Tests
				|...ServicesTest	//Contains all testes of the project (BizTest and ServiceTest)

		- Frontend:

		The client side of the application was developed using AngularJS(1.6.9) - a data
		driven MVV* framework.

		Angular Material was used for this project to provides a set of reusable, well-tested, and accessible UI components based on Material Design.

		HTML5 was used for rendering content on the browser and CSS3 for styling and
		animating rendered content

		Bootstrap were used to provide a responsive client side application.

        Sass was used to improve a CSS3 style code and animating rendered.

		In addition, Karma running on Jasmine was used to write unit test suites for 
		the angular controllers and factories defined. All configurations from the project was
        provide in a gulpfile.js and pacakge.json files.

	1.3 Functional Requirements (the client Requirements file)

		- Crie uma aplicação de pequeno porte que retorne a previsão do tempo para 7 dias,
        baseado na cidade informada em uma entrada de valores.
        - Endereço para obter o código da cidade:
            http://servicos.cptec.inpe.br/XML/listaCidades?city={Nome}
        - Endereço para obter a previsão:
            http://servicos.cptec.inpe.br/XML/cidade/7dias/{CodigoDaCidade}/previsao.xml
        - A aplicação pode possuir uma interface simples, mas funcional, deve possuir um título de página,
          um input para pesquisa da cidade digitada e um campo que mostre a url formatada com o código
          da cidade pesquisada.
        - Após a pesquisa da previsão completa com o código da cidade, mostrar um grid com as informações:
            - Acima do grid:
                Nome da cidade | UF | Data de consulta(atualização)
            - No grid:
                Data (formato deve ser em Português)
                Tempo (consultar significado de cada sigla na tabela fornecida pelo cliente)
                Máxima
                Mínima


	1.4 Non Functional Requirements
		- Code should be well documented by comments
		- Exception handling should be done where necessary
		- Code should be well organized into files and folders
		- UI design should be clean and polished
		- CSS animations should be used to make the application more appealing
		- UI should be cross-browser compatible
		- UI should be cross-device compatible

2. SETTING UP & RUNNING THE APPLICATION
	
	1.1 Back-End Side App
		- To start the Tempo-Back-End Project:
			execute the file 'PrevisaoTempo.Api.exe' (prefer to run as administrator) and the
			service will be started in a console. The project will run at the
			'http://localhost:3002/'.
		- Tips: check if there are no services running on the same port

	1.2 Client Side App
		-The client application resides in the 'Tempo-Front-End' folder of the
		  maintaining the configurations set, the URL
		  will be 'http://localhost/8000/'.
		-Remember to use Admin mode in a Prompt Command
        -To start the project run the commands bellow.
			- run the command 'npm start' to start the application.
		-Tips: In this project all references will provide by a CDN. But the file 'gulpfile.js'
			was configured to inject all dependencies at 'index.html' file.

		- The presumption here is that all the client dependencies that have been declared in
		  'package.json' are installed. If not, errors requiring the installation of these
		  dependencies will be thrown and the application will not run until they are installed.

	1.3 Unit Tests - Karma

		- Unit tests were written for the AngularJS client side application developed.

		- These tests are housed in the 'src/app/Tests' folder.

		- At the root of the frontend code - the same place where 'config.js' and 'package.json'
		  are located - is a configuration file 'karma.conf.js' that has the dependency 
		  configurations and paths needed to run karma.

		- Running 'npm test' on a terminal or command prompt while at the root 
		  of the code folder (change directory to the folder) starts the karma test and generates
		  a report.

3. CLIENT APP SOURCE CODE FOLDER STRUCTURE
	
	The single page application developed (housed in the 'client' folder) has the its code structured
	as below:

	|...src
		|...app
			|...Core	// Contains All Main Configurations of all projects.
			|...ProjetoTempo
			|...ProjetoTempo
				|...controllers 	// Contains the AngularJS controllers for the application.
										Controller files are named using the convention:
										<feature>.controller.js
				|...lib				// Contains plugins and resources such as CSS and JS scrfiles
				|...templates		// Contains the HTML templates rendering different content
				|...services		// Contains the AngularJS services and factories consumedcontrollers
										Services files are named using the convention:
										<feature>.service.js
			|...tests 			//  Contains the Jasmine unit test scripts
									Test files are named using the convention:
								   	<feature>.<controller or service>.spec.js
			...app.module.js 			// The entry point of the Angular application where various routes are
								   		   defined
			...index.html 		// The index html page on which templates are loaded

/*----------------------------------------------------END OF FILE---------------------------------------------*/
