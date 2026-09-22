from fastapi import APIRouter

from apps.api.app.core.config import get_settings

router = APIRouter(tags=["Health"])


@router.get("/health")
def health_check() -> dict[str, str]:
    """Return basic API health information."""
    settings = get_settings()

    return {
        "status": "healthy",
        "service": settings.app_name,
        "version": settings.app_version,
        "environment": settings.app_environment,
    }
