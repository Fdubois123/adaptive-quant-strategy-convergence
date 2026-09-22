from fastapi.testclient import TestClient

from apps.api.app.main import app

client = TestClient(app)


def test_root() -> None:
    response = client.get("/")

    assert response.status_code == 200
    assert response.json() == {
        "name": "Adaptive Quant Intelligence API",
        "version": "0.1.0",
        "docs": "/docs",
        "health": "/health",
    }


def test_health() -> None:
    response = client.get("/health")

    assert response.status_code == 200

    payload = response.json()

    assert payload["status"] == "healthy"
    assert payload["service"] == "Adaptive Quant Intelligence API"
    assert payload["version"] == "0.1.0"
    assert payload["environment"] == "development"


def test_system_status() -> None:
    response = client.get("/api/v1/system/status")

    assert response.status_code == 200

    payload = response.json()

    assert payload["platform"] == "Adaptive Quantitative Strategy Convergence"
    assert payload["api"] == "operational"
    assert payload["quant_engine"] == "integration_pending"
    assert payload["market_data"] == "integration_pending"
    assert payload["regime_engine"] == "integration_pending"
    assert payload["stress_engine"] == "integration_pending"
