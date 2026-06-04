import { useEffect, useState } from "react";
import { fetchTasks, createTask, deleteTask } from "./services/api";
import styles from "./App.module.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  async function refresh() {
    try {
      const data = await fetchTasks();
      setTasks(data);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    refresh().finally(() => setLoading(false));
  }, []);

  async function handleAdd(e) {
    e.preventDefault();
    const t = title.trim();
    if (!t) return;
    setBusy(true);
    try {
      await createTask(t);
      setTitle("");
      await refresh();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete(id) {
    setBusy(true);
    try {
      await deleteTask(id);
      await refresh();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.blobA} aria-hidden />
      <div className={styles.blobB} aria-hidden />
      <div className={styles.blobC} aria-hidden />

      <main className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Tasks</h1>
          <p className={styles.subtitle}>Minimal. Clear. Done.</p>
        </header>

        <form onSubmit={handleAdd} className={styles.form}>
          <div className={styles.inputWrap}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What needs doing?"
              className={styles.input}
              disabled={busy}
              aria-label="New task title"
            />
          </div>
          <button
            type="submit"
            className={styles.btn}
            disabled={busy || !title.trim()}
          >
            Add
          </button>
        </form>

        {error && (
          <div className={styles.error} role="alert">
            {error}
          </div>
        )}

        {loading ? (
          <div className={styles.loading} aria-busy="true">
            <div className={styles.spinner} />
            <span className={styles.loadingText}>Loading tasks…</span>
          </div>
        ) : tasks.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon} aria-hidden />
            No tasks yet — add one above.
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {tasks.map((t, i) => (
                <li
                  key={t.id}
                  className={styles.item}
                  style={{ "--delay": `${i * 0.06}s` }}
                >
                  <span className={styles.taskText}>
                    <span className={styles.id}>#{t.id}</span>
                    {t.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDelete(t.id)}
                    className={styles.del}
                    disabled={busy}
                    aria-label={`Delete task ${t.title}`}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <p className={styles.count}>
              {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
            </p>
          </>
        )}
      </main>
    </div>
  );
}
