# JavaScript Concepts

---

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:**  
`getElementById` access a particular element with an id from the DOM.  
`getElementsByClassName` access all the elements that has the same class in the DOM.  
`querySelector` / `querySelectorAll` can take an id or a class but `querySelectorAll` will return all the matching class element and `querySelector` will return the first matching element.

---

## 2. How do you create and insert a new element into the DOM?

**Answer:**  
I can create an element with the `document.createElement()` function. After creating an element such as `div`, `section`, `aside` etc., I have to declare that element to a parent element. To do that I have to access an element that I want to be the parent of the element I just created, then set the created element as a child.  
document.getElementById("parentDiv").appendChild(div)


## 3. What is Event Bubbling and how does it work?
**Answer:**
Event bubbling is the process of triggering event from child to parent until it reaches the top of the DOM (document).
Example: If I click a button that has an event handler, it will then go to its parent, then that parent's parent, and so on until it reaches the top. While bubbling to the top, if it finds any other event handler it will trigger that.

## 4. What is Event Delegation in JavaScript? Why is it useful?
**Answer:**
Event delegation is the process where you put event handler on the parent instead of every child. This makes the code smaller and efficient.
How it works is after putting the event handler on the parent, we detect which child is clicked with event.target and manipulate that child without giving every single child an event handler.



## 5. What is the difference between preventDefault() and stopPropagation() methods?
**Answer:**
When submitting a form, the page reloads. It is a default behaviour of form. We can prevent this by applying `preventDefault()` on the function.
```js
document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault()
})
```

On the other hand, `stopPropagation()` stops the bubbling of event. If `stopPropagation()` is used, the event on parents will not trigger but siblings event will occur.
```js
document.getElementById("submit-btn").addEventListener("click", function(event){
    event.stopPropagation()
})
```