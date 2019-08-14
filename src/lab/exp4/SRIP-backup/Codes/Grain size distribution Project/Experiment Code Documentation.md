**Experiment Code Documentation**

**Introduction**

This document captures the experiment implementation details.

**Code Details**

The package mainly used for this simulation is **Canvas.** The canvas width and height has been set to the window size.

- **Function-drawMain**

 ![](images/drawMain.JPG)

   **Fig 1-Static simulator**

**What it does-** This function is used for the outline and filling of the 2d drawing i.e to build a static drawing using coordinates as shown in fig-1.

**Arguments-**
color-It recieves color code as a parameter.
num-It recieves 0 or 1 depending on whether it is course or fine.         

- **Function-draw**
                            
**What it does-** This function is used as a generalized function for drawing of lines.

**Arguments-**

**lw-** line width

**Ss-** stroke style

**x1,y1-** Origin coordinate

**x2,y2-** Destination coordinate

-  **Function-heading**

**What it does** -This function is used to change the heading of the simulation as per the selected type.

**Arguments-**

**pid-** This argument takes in the current instance of the object passed from html through onclick.

- **Function-left_box**

**What it does-** This function is used to draw the static left box.

**Arguments-** None

- **Function-right_box**

**What it does-** This function is used to draw the static right box.
**Arguments-** None

- **Function-static_mud**

**What it does** -This function is used to draw the static mud.

**Arguments-** Color-Takaes the Color code of the mud.

- **Function-static_dots**

**What it does**- This function is used to draw the static mud spots.

**Arguments-** None

- **Function-sieve**

**What it does-** This function is used to draw the static sieve on the right side.

**Arguments-** None

- **Function-move/move1**

**What it does-** It moves the mud in the vertical direction upwards.move for course and move1 for fine.

**Arguments-** None

- **Function-move-right/move1-right**

**What it does-** It moves the mud in the horizontal direction right.move_right for course and move1_right for fine.

**Arguments-** None

- **Function-reform/reform1**

**What it does-** This function is used to change the size of the mud to such that it fits in the sieve.reform for course and reform1 for fine.

**Arguments-** None

- **Function-move_down/move1_down**

**What it does-** It animates the movement of mud through the sieve downwards.It also moves the sieve from left to right and vice versa.move_down for course and move1_down for fine.

**Arguments-** None


- **Function-exit**

**What it does-** This function does the patch work after animation to bring the sieve to it's original form.

**Arguments-** None


**Manual link:** [http://smfe-iiith.vlabs.ac.in/exp4/Exp-4%20GrainSizeDistribution.pdf]
