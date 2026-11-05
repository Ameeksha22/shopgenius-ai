
from fastapi import FastAPI #create backend application 

# Create our FastAPI application
app = FastAPI(
    title="ShopGenius AI Service",
    description="AI-powered shopping assistant backend",
    version="1.0.0"
)

# Health check endpoint
@app.get("/health") #This tells FastAPI to execute the function below whenever a GET request reaches /health
async def health_check():#async func
    return {
        "status": "success",
        "message": "ShopGenius AI service is running"
    }

# Root endpoint
@app.get("/")
async def root():

    return {
        "message": "Welcome to ShopGenius AI"
    }
 