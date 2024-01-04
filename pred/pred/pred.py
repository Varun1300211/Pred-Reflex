"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config

import reflex as rx

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""

    pass

# 
def index() -> rx.Component:
    return rx.fragment(
        rx.color_mode_button(rx.color_mode_icon(), float="right"),
        rx.vstack(
            rx.heading("IPL Score Predictor\n", font_size="1em"),
            spacing="1.5em",
            font_size="2em",
            padding_top="10%",
        ),

    rx.center(
       rx.popover(
            rx.popover_trigger(rx.button("Description", bg="green", color="white", size="md")),
            rx.popover_content(
            rx.popover_body("A Simple ML Model to predict IPL Scores between teams in an ongoing match. To make sure the model results accurate score and some reliability the minimum no. of current overs considered is greater than 5 overs."),
            rx.popover_close_button(),
        ),
    )

        ),
        rx.center(
            rx.menu(
        rx.menu_button("Select the batting team"),
        rx.menu_list(
        rx.menu_item("Chennai Super Kings"),
        rx.menu_item("Delhi Daredevils"),
        rx.menu_item("Kings XI Punjab"),
        rx.menu_item("Kolkata Knight Riders"),
        rx.menu_item("Mumbai Indians"),
        rx.menu_item("Rajasthan Royals"),
        rx.menu_item("Royal Challengers Bangalore"),
        rx.menu_item("Sunrisers Hyderabad"),
    ),
)
        )
    )

accent_color = "rgb(176,196,222)"
style = {
        "background_color": accent_color,
}
# Add state and page to the app.
app = rx.App(style=style)
app.add_page(index)
app.compile()
