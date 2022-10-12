# AllInOne Store

This document describes the technical details of the AllInOne Store project and noteworthy information for development.



## Technology

- React
- React - router - dom
- AntD UI library
- Redux (in development....)



### React

- Use webPack to package and manage React projects. 

- In most cases, functions are used as component forms.

  ![image-20221011172349640](C:\Users\xuqi\AppData\Roaming\Typora\typora-user-images\image-20221011172349640.png)



- The project is divided into components, pages, and utils folders, which represent custom components, all pages, and utility functions respectively.

  ![image-20221011172556840](C:\Users\xuqi\AppData\Roaming\Typora\typora-user-images\image-20221011172556840.png)



### React - router - dom

- Using React - router - dom to manage switching pages. If you want to control the page jump in the function, use useNavigate.

  ![image-20221011172947386](C:\Users\xuqi\AppData\Roaming\Typora\typora-user-images\image-20221011172947386.png)

React - router - dom uses browser URL matching technology. When you call navigate, it appends the parameter "/cart" to the browser URL. For example, the original "localhost:3000" will become "localhost:3000/cart" after the call.



Then configure where to display the page in App.js.

​		![image-20221011173109775](C:\Users\xuqi\AppData\Roaming\Typora\typora-user-images\image-20221011173109775.png)

This element means when the monitored URL changes to "/about", the <About/> component will be displayed at the current location. You can pass parameters through component props.



### AntD

This is a UI library developed by Alibaba team. It provides rich components, colors, and icons for us to use directly.

[Ant Design - The world's second most popular React UI framework](https://ant.design/) 



During the development process, you can choose to develop your own custom components, or you can choose to use the components in the UI library directly. When necessary, you can even encapsulate the components in the UI library twice to achieve more functions.



