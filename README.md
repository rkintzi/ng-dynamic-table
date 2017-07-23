# How to implement dynamic tables in Angular.io.

**So, what is a dynamic table?**

Dynamic table is an Angular.io component that renders an HTML table 
with virtually any kind of data. You can pass it a list of structures 
(each structure would become a row in the table), and configure how the 
data should be presented. You can define how many columns do you need, 
and then for each column:
* Its title/header
* How to get data from a row's structure, that should be presented in column's 
  cells
* Which component to use to render column's cells

**Remarks**

1. This code is not intended to be distributed as a library (it is not, 
   and will never be, generic enough). It is more an illustration of different 
   techniques, and how they can be used to achieve particular goals.  
   If you find this code useful and want to use it in your own project, 
   just copy, paste and adapt.  
2. This code is in its early stage. It works, but it deserves for a better 
   documentation. This is on my TODO list. For now, read the code (it is rather 
   small).
