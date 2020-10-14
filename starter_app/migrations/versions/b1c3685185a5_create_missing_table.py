"""create missing table

Revision ID: b1c3685185a5
Revises: 977b9db2fe4d
Create Date: 2020-10-13 10:26:37.386929

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b1c3685185a5'
down_revision = '977b9db2fe4d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('missings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('fullName', sa.String(length=100), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('tribalAffiliation', sa.String(length=20), nullable=False),
    sa.Column('location', sa.String(length=50), nullable=False),
    sa.Column('dateLastSeen', sa.DateTime(), nullable=False),
    sa.Column('details', sa.String(length=1000), nullable=True),
    sa.Column('status', sa.String(length=10), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('missings')
    # ### end Alembic commands ###
