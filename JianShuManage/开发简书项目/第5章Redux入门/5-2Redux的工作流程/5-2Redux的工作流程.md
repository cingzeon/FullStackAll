### 5-2Redux的工作流程
```jsx
    Redux Flow

             dispatch(action) (previousState, action)  
    Action Creaturs ------> Store ------> 
       |                      |   <------ Reducers
       |                      ↓   (newState) 
       ☇------------> (state) 
                          React Components
                           图书          
             
```