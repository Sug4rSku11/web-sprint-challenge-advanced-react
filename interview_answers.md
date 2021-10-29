# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    -Stateful components own their own state object and is dependent on it's properties while
     functional components only receive props objects.
2. When does a componentWillMount function be called? What about a componentWillUpdate?
    -ComponentWillMount is called before the initial render of a component, componentWillUpdate is called to allow us to handle configuration changes and prepare for the next render with this.props or this.state. 
3. Define stateful logic.
    -Stateful logic is any code that uses the state.

4. What are the three step of creating a successful test? What is done in each phase?
    -Arrange renders a React element into a Virtual DOM.
    -Act is the mimic of user interaction.
    -Assert makes sure the behavior has been completed.