// the View'API layer 
const BASE ="http://localhost:8000";

export async function fetchTasks() {
    const res = await fetch(`${BASE}/tasks/`);
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
}


// Modify createTask to accept owner_id and include it in the body:

export async function createTask(title, owner_id) {
     const res = await fetch(`${BASE}/tasks/`, {
         method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, owner_id  }),
         });
    if (!res.ok) throw new Error("Create failed");
    return res.json();
}

export async function deleteTask(id) {
    const res = await fetch(`${BASE}/tasks/${id}`, { 
        method: "DELETE",
     });
    if (!res.ok) throw new Error("Delete failed");
}

export async function fetchUsers() {
    // TODO: Get /users/ -same pattern as fetch tasks ...
    const res = await fetch(`${BASE}/users/`);
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
}
