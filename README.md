# COVID19-Tracker

[![Fire-Shot-Capture-019-COVID19-Report-another-coronavirus-tracker-s3-website-us-west-2-amazonaws.png](https://i.postimg.cc/25qs2vrm/Fire-Shot-Capture-019-COVID19-Report-another-coronavirus-tracker-s3-website-us-west-2-amazonaws.png)](https://postimg.cc/Ff4CKYYn)

A Coronavirus tracker that utilizes <a href="https://disease.sh/">disease.sh</a> API to display current data on the global epidemic for any country or worldwide.

## Features
* 7-Day Average & Daily Composed Chart W/ the option to scope in the last 30 days.
* Heat Map that showcases the highest to lowest cases per hundred using gradiant for range.
* Right Dock including card components that includes the following data that corresponds to the user's choice from dropdown:
  *  Update time of API
  *  Cases, recovieries, and deaths W/ amount difference since yesterday
  *  Cases, recovories, and deaths amount total in 14 days
  *  Current doses of vaccine handed out
  *  Days total since first case appeared

## Built with
* <a href="https://reactjs.org/">React</a> Version (16.13.1): 
* <a href="https://reactjs.org/">Recharts</a>
* <a href="https://www.react-simple-maps.io/">React Simple Maps</a>

##  Why these technologies?
* React supported the idea of breaking down ideas into components where it allowed the website components to become organized which I found to be a vital part when it comes to showcasing different types of data regarding to the coronavirus. Its ability to have the components reused such as the card_template component to display different information about a country or worldwide. One of the other benefits of using React for this website was the possiblity in using functions as handlers of certain events. This would lead me to build functions that would take the user's input in the dropdown that would include choices such as worldwide or country coronavirus data. Overall, the library allowed me to create rich widgets and UI.
* Recharts allowed the ability to build responsive and understandable charts with the least amount time. It is built on top of SVG elements with a lightweight dependancy on D3. It is a reusable React component that allows passing in custom components. I have used one of their charts which would be ComposedChart and what this chart is capable of is using more than one type of chart in order to show different data over time in one sitting.
* React simple maps is a thin wrapper around D3-Geo and topojson which makes the dependancy tiny. The type I have used from React simple maps was the global choropleth map chart which allowed me to darken areas of the world that had the highest per hundred scale for easy understanding.

## To-do
* Transition components to be mobile-friendly. Currently the website only supports desktop ratios.
