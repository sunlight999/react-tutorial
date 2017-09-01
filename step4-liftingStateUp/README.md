> ```
>       _                 ___ 
>      | |               /   |
>   ___| |_ ___ _ __    / /| |
>  / __| __/ _ \ '_ \  / /_| |
>  \__ \ ||  __/ |_) | \___  |
>  |___/\__\___| .__/      |_/
>              | |            
>              |_|           
> ```

# React-tutorial: lifting state up. When you want to aggregate data from multiple children or to have two child components communicate with each other, move the state upwards so that it lives in the parent component. The parent can then pass the state back down to the children via props, so that the child components are always in sync with each other and with the parent.