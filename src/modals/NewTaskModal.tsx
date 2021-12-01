const NewTaskModal = ({ closeNewTaskModal }: any) => {
  return (
    <div>
      <h1>Create New Task</h1>
      <form>
        <label>Description</label>
        <input type="text" />
        <label>Complete?</label>
        <label>Yes</label>
        <input type="radio" value="Yes" />
        <label>No</label>
        <input type="radio" value="No" />
        <button type="submit">Create</button>
      </form>
      <button>Create</button>
      <button onClick={closeNewTaskModal}>Close</button>
    </div>
  );
};

export default NewTaskModal;
