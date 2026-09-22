from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from apps.api.app.api.routes.health import router as health_router
from apps.api.app.api.routes.system import router as system_router
from apps.api.app.core.config import get_settings

settings = get_settings()

app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    description=(
        "Backend API for the Adaptive Quantitative Strategy Convergence "
        "and Global Market Risk Intelligence Platform."
    ),
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(system_router)


@app.get("/", tags=["Root"])
def root() -> dict[str, str]:
    """Return API identity."""
    return {
        "name": settings.app_name,
        "version": settings.app_version,
        "docs": "/docs",
        "health": "/health",
    }
