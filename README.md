# Belly Button Challenge

This interactive web dashboard allows users to explore a dataset related to belly button biodiversity. Users can select a test subject ID number from a dropdown menu to view corresponding demographic information, a bar chart showing the top 10 OTUs (Operational Taxonomic Units) found in the subject's belly button, a bubble chart displaying all OTUs found in the subject's belly button, and a gauge chart indicating the number of belly button washes per week for the selected subject.


## Getting Started

To use the dashboard, simply open the index.html file in a web browser. The dashboard will load the dataset from samples.json and display the default test subject's information and charts. Use the dropdown menu to select a different test subject and view their data.


## File Structure

- index.html: The main HTML file that contains the structure of the dashboard.
  
- static/js/app.js: JavaScript file that handles the initialization of the dashboard, fetching data from samples.json, and updating the charts based on user input.

- static/js/bonus.js: JavaScript file that contains the function for creating the gauge chart to display the number of belly button washes per week.



## Dependencies

The following libraries are used in this project:

- D3.js (v7.0.0): A JavaScript library for manipulating documents based on data.

- Plotly.js (latest version): A JavaScript graphing library for creating interactive charts.


## Data Source

The dataset used in this project is stored in samples.json, which is hosted at the [URL here](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json)

The dataset contains information about test subjects, including their demographic data, OTU IDs, sample values, and OTU labels.

## Usage

Upon opening the dashboard, the default test subject's information and charts are displayed.
Use the dropdown menu labeled "Test Subject ID No." to select a different test subject.
The demographic information, bar chart, bubble chart, and gauge chart will update dynamically based on the selected test subject.
