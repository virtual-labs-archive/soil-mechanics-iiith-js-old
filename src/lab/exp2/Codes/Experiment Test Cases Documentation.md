# Experiment Test Cases Documentation

## Introduction 
This document captures the test cases of the experiment.

### Functional Test Cases

| Test case Id 	|             Test Scenario            	|      Test Case     	|                                               Test Steps                                              	|   Test Data  	|              Expected Output              	|               Actual Output               	| Test Result 	| Comments 	|
|:------------:	|:------------------------------------:	|:------------------:	|:-----------------------------------------------------------------------------------------------------:	|:------------:	|:-----------------------------------------:	|:-----------------------------------------:	|:-----------:	|:--------:	|
|       1      	| Starting and Playing the animation 	| Start/Play button 	|                          1) Press the Start button. 2) Press the Play button.                         	| Mouse Clicks 	|       Animation starts     	|       Animation starts       	|     Pass    	|   None   	|
|       2      	|    Pause and Resuming the animation   	|  Pause/Resume button 	| 1) To pause animation, press Pause button. 2) Press Resume button to resume the animation 	| Mouse Clicks 	|    Animation paused and resumed successfully.   	|    Animation paused and resumed successfully.   	|     Pass    	|   None   	|
|       3      	|  Resetting the animation 	|    Stop button.   	|                 1) Press the Stop button.                	| Mouse Clicks 	| Animation reset to default successfully. 	| Animations reset to default successfully. 	|     Pass    	|   None   	|

### Cross Browser Testing

| S.NO 	|      Browser      	|     Version    	| Works(Yes/No) 	|
|:----:	|:-----------------:	|:--------------:	|:-------------:	|
|   1  	|       Chrome      	|  75.0.3770.100 	|      Yes      	|
|   2  	|      FireFox      	|     67.0.4     	|      Working but not properly      	|
|   3  	|        Edge       	|  41.16299.371.0  	|     Working but not properly       	|
|   4  	| Internet Explorer 	| 11.371.16299.0 	|       No      	|