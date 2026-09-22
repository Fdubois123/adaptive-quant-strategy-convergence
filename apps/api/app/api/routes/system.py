from fastapi import APIRouter

from apps.api.app.core.config import get_settings

router = APIRouter(prefix="/api/v1/system", tags=["System"])


@router.get("/status")
def system_status() -> dict[str, str]:
    """Return high-level platform status."""
    settings = get_settings()

    return {
        "platform": "Adaptive Quantitative Strategy Convergence",
        "api": "operational",
        "quant_engine": "integration_pending",
        "market_data": "integration_pending",
        "regime_engine": "integration_pending",
        "stress_engine": "integration_pending",
        "environment": settings.app_environment,
    }
