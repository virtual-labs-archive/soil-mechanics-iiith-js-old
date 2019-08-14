# Experiment Code Documentation

## Introduction

This document captures the experiment implementation details.

## Code Details

### File Name: element.js

**File Description:**

**Class: soil**

**Class Description:**

It contains all the operation that are executed on soil object like compression, expansion etc. Few functions and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| constructor () | It initializes all variables of the class |
| strk () | It is used for making soil more realistic |
| compress () | It is used to reduce size of soil when weight falls on it |
| expand () | It is used to expand size of soil when weight is lifted from it |
| show () | It is used to show the soil on canvas |

**Class: weight**

**Class Description:**

It contains all the operation that are executed weight it like compression, expansion etc. Few functions and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| constructor () | It initializes all variables of the class |
| fall () | It is used for making soil more realistic |
| lift () | It is used to reduce size of soil when weight falls on it |
| show () | It is used to show the weights on canvas |

**Class: weight**

**Class Description:**

It contains all the operation that are executed weight it like compression, expansion etc. Few functions and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| constructor () | It initializes all variables of the class |
| s1 () | It is used to set parameters of 1st water patch |
| flow1 () | Used to move 1st water patch |
| s2 () | It is used to set parameters of 2nd water patch |
| flow2 () | Used to move 2nd water patch |
| s3 () | It is used to set parameters of 3rd water patch |
| flow3 () | Used to move 3rd water patch |
| show () | It is used to show the water patch on canvas |

### File Name: main.js

**File Description:**

This file is responsible for creation of canvas and telling object how to move in canvas. Few function and their explanation are listed below:

| **Name of function** | **Description** |
| --- | --- |
| setup () | It initializes canvas making process of p5.js |
| draw () | It is used to redraw the objects after any changes are made. This function is called again and again automatically in p5.js |
| strt () | It is used to start/reset the animation. It is called from button on HTML page |
| stuff () | It is used to create objects of different classes which were created in element.js |


### File Name: index.html

**File Description:**

This file is main file which is open in browser for starting of animation. It contains a button which is used to start or reset the animation.  

**Other details:**

**Formulas used in the Experiment**

Most of the formulas used are based on cordinate system. Two main formulas used are listed below:

1. **For downwards movement**

obj.y = obj.y + 1 //Increase the y cordinates of each point of object

2. **For compression movement of mud**

mud.y = mud.y - 1 //Decrease the y cordinates of rectangle used for making mud

mud.height = mud.height - 1 //Decrease the height of rectangle used for making mud

3. **For expansion movement of mud**

mud.y = mud.y + 1 //Increase the y cordinates of rectangle used for making mud

mud.height = mud.height + 1 //Increase the height of rectangle used for making mud


