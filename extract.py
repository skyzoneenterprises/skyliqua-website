import os
import sys
import PyPDF2
import docx
import extcolors

def extract_pdf(path):
    print("--- PDF CONTENT ---")
    try:
        reader = PyPDF2.PdfReader(path)
        for page in reader.pages:
            print(page.extract_text())
    except Exception as e:
        print("Error reading PDF:", e)

def extract_docx(path):
    print("\n--- DOCX CONTENT ---")
    try:
        doc = docx.Document(path)
        for para in doc.paragraphs:
            print(para.text)
    except Exception as e:
        print("Error reading DOCX:", e)

def extract_colors(path):
    print("\n--- COLOR SCHEME ---")
    try:
        colors, pixel_count = extcolors.extract_from_path(path)
        for c in colors:
            hex_color = "#{:02x}{:02x}{:02x}".format(c[0][0], c[0][1], c[0][2])
            print(f"{hex_color} - coverage: {c[1]}")
    except Exception as e:
        print("Error extracting colors:", e)

if __name__ == "__main__":
    pdf_path = "public/docs/Comparision doc.pdf"
    docx_path = "skyliqua.docx"
    jpg_path = "color-scheme.jpeg"
    
    if os.path.exists(pdf_path):
        extract_pdf(pdf_path)
    if os.path.exists(docx_path):
        extract_docx(docx_path)
    if os.path.exists(jpg_path):
        extract_colors(jpg_path)
