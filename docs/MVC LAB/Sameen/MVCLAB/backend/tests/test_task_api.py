def test_get_tasks_empty_returns_200_and_empty_list(client):
    r = client.get("/tasks/")

    assert r.status_code == 200
    assert r.json() == []

def test_post_task_returns_201_with_created_task(client,alice):
    r = client.post("/tasks/", json={"title": "Read Docs"})

    assert r.status_code == 201
    body = r.json()
    assert body["title"] == "Read Docs"
    assert "id" in body

def test_post_task_with_empty_title_returns_422(client):
    r = client.post("/tasks/", json={"title": ""})
    assert r.status_code == 422

def test_get_task_by_returns_the_task(client):
    created = client.post("/tasks/", json={"title": "Read Docs"}).json()

    r = client.get(f"/tasks/{created['id']}")

    assert r.status_code == 200
    body = r.json()
    assert body["id"] == created["id"]
    assert body["title"] == "Read Docs"

def test_delete_own_task_returns_204_then_get_returns_404(client):
    task_id = client.post("/tasks/", json={"title": "Read Docs"}).json()["id"]

    r = client.delete(f"/tasks/{task_id}")
    assert r.status_code == 204

    r = client.get(f"/tasks/{task_id}")
    assert r.status_code == 404