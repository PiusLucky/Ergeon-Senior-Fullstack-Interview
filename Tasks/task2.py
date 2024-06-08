from functools import wraps

def call_counter(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        wrapper.call_count += 1 # Special call_count method
        print(f"{func.__name__} has been called {wrapper.call_count} times")
        return func(*args, **kwargs)
    
    wrapper.call_count = 0
    return wrapper

@call_counter
def process_data():
    print("Processing data...")

@call_counter
def generate_report():
    print("Generating report...")

# Simulate function calls
process_data()
process_data()
generate_report()
generate_report()