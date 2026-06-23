// // // the view component
// // import { useEffect, useState } from "react";
// // import { createTask, deleteTask, fetchTasks } from "./services/api";

// // export default function App() {
// //     const [tasks, setTasks] = useState([]);
// //     const [title, setTitle] = useState("");
// //     const [loading, setLoading] = useState(true);

// //     async function loadTasks() {
// //         const data = await fetchTasks();
// //         setTasks(data);
// //     }

// //     useEffect(() => {
// //         loadTasks()
// //             .catch(console.error)
// //             .finally(() => setLoading(false));
// //     }, []);

// //     async function handleCreate(e) {
// //         e.preventDefault();
// //         if (!title.trim()) return;

// //         await createTask(title.trim());
// //         setTitle("");
// //         await loadTasks();
// //     }

// //     async function handleDelete(id) {
// //         await deleteTask(id);
// //         await loadTasks();
// //     }

// //     return (
// //         <div>
// //             <h1>Tasks</h1>

// //             <form onSubmit={handleCreate}>
// //                 <input
// //                     type="text"
// //                     value={title}
// //                     onChange={(e) => setTitle(e.target.value)}
// //                     placeholder="Enter task title"
// //                 />
// //                 <button type="submit">Add</button>
// //             </form>

// //             {loading ? (
// //                 <p>Loading tasks...</p>
// //             ) : (
// //                 <TaskList tasks={tasks} onDelete={handleDelete} />
// //             )}
// //         </div>
// //     );
// // }

// // function TaskList({ tasks, onDelete }) {
// //     return (
// //         <div>
// //             {tasks.map((t) => (
// //                 <div key={t.id}>
// //                     {t.title} <button onClick={() => onDelete(t.id)}>Delete</button>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // }

// import { useEffect, useState } from "react";
// import { fetchTasks, fetchUsers, createTask, deleteTask } from "./services/api";
// import styles from "./App.module.css";

// export default function App() {
//   const [tasks, setTasks] = useState([]);
//   const [users, setUsers] = usestate([]);
//   const [selectedOwnerId, setSelectedOwnerId] = useState("");
//   const [title, setTitle] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [busy, setBusy] = useState(false);
//   const [error, setError] = useState(null);

//   async function refreshUsers() {
//     try {
//       const data = await fetchUsers();
//       setUsers(data);
//     } catch(e) {
//       setError(e.message);
//     }
//   }

//   async function refresh() {
//     try {
//       const data = await fetchTasks();
//       setTasks(data);
//       setError(null);
//     } catch (e) {
//       setError(e.message);
//     }
//   }

//   useEffect(() => {
//     Promise.all([
//       refresh(),
//       refreshUsers()
//     ]).finally(() => setLoading(false));
//   }, []);

//   async function handleAdd(e) {
//     e.preventDefault();
//     const t = title.trim();
//     if (!t) return;
//     setBusy(true);
//     try {
//       await createTask(t, Number(selectedOwnerId));
//       setTitle("");
//       setSelectedOwnerId("");
//       await refresh();
//     } catch (e) {
//       setError(e.message);
//     } finally {
//       setBusy(false);
//     }
//   }

//   async function handleDelete(id) {
//     setBusy(true);
//     try {
//       await deleteTask(id);
//       await refresh();
//     } catch (e) {
//       setError(e.message);
//     } finally {
//       setBusy(false);
//     }
//   }
//   const userById = Object.fromEntries(
//     users.map((u) => [u.id, u])
//   );
  
//   return (
//     <div className={styles.wrap}>
//       <h1 className={styles.h1}>Tasks</h1>

//       <form onSubmit={handleAdd} className={styles.form}>
//         <input
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="New task title…"
//           className={styles.input}
//           disabled={busy}
//         />
//         {
//           <select
//   value={selectedOwnerId}
//   onChange={(e) =>
//     setSelectedOwnerId(e.target.value)
//   }
//   disabled={busy}
// >
//   <option value="">
//     Select User
//   </option>

//   {users.map((u) => (
//     <option
//       key={u.id}
//       value={u.id}
//     >
//       {u.name}
//     </option>
//   ))}
// </select>
// }
//         <button
//           type="submit"
//           className={styles.btn}
//           disabled={busy || !title.trim() || !selectedOwnerId}
//         >
//           Add
//         </button>
//       </form>

//       {error && <div className={styles.error}>Error: {error}</div>}

//       {loading ? (
//         <div className={styles.muted}>Loading…</div>
//       ) : tasks.length === 0 ? (
//         <div className={styles.muted}>No tasks yet — add one above.</div>
//       ) : (
//         <ul className={styles.list}>
//           {tasks.map((t) => (
//             <li key={t.id} className={styles.item}>
//               <span>
//   <span className={styles.id}>
//     #{t.id}
//   </span>
//   {t.title}
// </span>
//               <button
//                 onClick={() => handleDelete(t.id)}
//                 className={styles.del}
//                 disabled={busy}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import { useEffect, useMemo, useState } from "react";
import { fetchTasks, fetchUsers, createTask, deleteTask } from "./services/api";
 
export default function App() {
  const [tasks, setTasks]       = useState([]);
  const [users, setUsers]       = useState([]);
  const [title, setTitle]       = useState("");
  const [ownerId, setOwnerId]   = useState("");
  const [loading, setLoading]   = useState(true);
  const [busy, setBusy]         = useState(false);
  const [error, setError]       = useState(null);
 
  const usersById = useMemo(
    () => Object.fromEntries(users.map(u => [u.id, u])),
    [users]
  );
 
  async function refresh() {
    try {
      const [t, u] = await Promise.all([fetchTasks(), fetchUsers()]);
      setTasks(t);
      setUsers(u);
      if (!ownerId && u.length) setOwnerId(String(u[0].id));
      setError(null);
    } catch (e) { setError(e.message); }
  }
 
  useEffect(() => { refresh().finally(() => setLoading(false)); }, []);
 
  async function handleAdd(e) {
    e.preventDefault();
    if (!title.trim() || !ownerId) return;
    setBusy(true);
    try {
      await createTask(title.trim(), Number(ownerId));
      setTitle("");
      await refresh();
    } catch (e) { setError(e.message); } finally { setBusy(false); }
  }
 
  async function handleDelete(id) {
    setBusy(true);
    try { await deleteTask(id); await refresh(); }
    catch (e) { setError(e.message); } finally { setBusy(false); }
  }
 
  if (loading) return <div>Loading…</div>;
 
  return (
    <div style={{ maxWidth: 520, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h1>Tasks</h1>
      <form onSubmit={handleAdd} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input value={title} onChange={e => setTitle(e.target.value)}
               placeholder="New task…" disabled={busy} style={{ flex: 1 }} />
        <select value={ownerId} onChange={e => setOwnerId(e.target.value)} disabled={busy}>
          {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
        <button type="submit" disabled={busy || !title.trim()}>Add</button>
      </form>
 
      {error && <div style={{ color: "crimson" }}>Error: {error}</div>}
 
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map(t => (
          <li key={t.id} style={{ display: "flex", justifyContent: "space-between",
                                  padding: "8px 0", borderBottom: "1px solid #eee" }}>
            <span>
              {t.title}{" "}
              <small style={{ color: "#888" }}>
                — {usersById[t.owner_id]?.name ?? "?"}
              </small>
            </span>
            <button onClick={() => handleDelete(t.id)} disabled={busy}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
